export interface LogInResponse {
  tokens: string;
  errors: Record<string, string[]>;
  obj: Record<string, string[]>;
  message: string;
}
