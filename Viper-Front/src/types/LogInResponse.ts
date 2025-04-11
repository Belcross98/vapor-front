export interface LogInResponse {
  tokens: string;
  errors: Record<string, string[]>;
}
