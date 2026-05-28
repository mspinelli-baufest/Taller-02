from fastapi import APIRouter, HTTPException, status
from jose import JWTError

from app.auth.schemas import LoginRequest, RefreshRequest, TokenResponse
from app.core.security import (
    ACCESS_TOKEN_EXPIRE_SECONDS,
    authenticate_user,
    create_access_token,
    create_refresh_token,
    decode_token,
)

router = APIRouter(prefix="/auth", tags=["auth"])

_INVALID_REFRESH_TOKEN_EXCEPTION = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="Invalid or expired refresh token",
    headers={"WWW-Authenticate": "Bearer"},
)


@router.post("/login", response_model=TokenResponse)
def login(request: LoginRequest):
    user = authenticate_user(request.username, request.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token = create_access_token(data={"sub": user["username"]})
    refresh_token = create_refresh_token(data={"sub": user["username"]})
    return TokenResponse(
        access_token=access_token,
        refresh_token=refresh_token,
        expires_in=ACCESS_TOKEN_EXPIRE_SECONDS,
    )


@router.post("/refresh", response_model=TokenResponse)
def refresh(request: RefreshRequest):
    try:
        payload = decode_token(request.refresh_token)
        if payload.get("type") != "refresh":
            raise _INVALID_REFRESH_TOKEN_EXCEPTION
        username: str = payload.get("sub")
        if username is None:
            raise _INVALID_REFRESH_TOKEN_EXCEPTION
    except JWTError:
        raise _INVALID_REFRESH_TOKEN_EXCEPTION

    access_token = create_access_token(data={"sub": username})
    refresh_token = create_refresh_token(data={"sub": username})
    return TokenResponse(
        access_token=access_token,
        refresh_token=refresh_token,
        expires_in=ACCESS_TOKEN_EXPIRE_SECONDS,
    )
