export const ErrorCatalog = {
  USER_ALREADY_EXISTS: {
    status: 409,
    error: "Conflict",
    message: "User already exists.",
    code: "USER_ALREADY_EXISTS",
  },
  USER_NOT_FOUND: {
    status: 404,
    error: "Not Found",
    message: "User not found.",
    code: "USER_NOT_FOUND",
  },
  INVALID_CREDENTIALS: {
    status: 401,
    error: "Unauthorized",
    message: "Invalid email or password.",
    code: "INVALID_CREDENTIALS",
  },
  USER_BLOCKED: {
    status: 429,
    error: "User blocked",
    message: "Many attempts. Try again later.",
    code: "USER_BLOCKED",
  },
  INVALID_AUTH_TOKEN: {
    status: 401,
    error: "Unauthorized",
    message: "Invalid or missing authentication token.",
    code: "INVALID_AUTH_TOKEN",
  },
} as const;