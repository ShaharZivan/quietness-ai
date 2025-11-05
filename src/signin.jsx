import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignInPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    setError("");

    // Validate that username is not empty
    if (!username.trim()) {
      setError("Please enter a username");
      return;
    }

    // Validate password only if not in "forgot password" mode
    if (!forgotPassword && !password.trim()) {
      setError("Please enter a password");
      return;
    }

    // Store username in localStorage
    localStorage.setItem("quietness_username", username.trim());

    // Navigate back to home page
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-4">
      <Card className="max-w-md w-full rounded-2xl shadow-xl">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <div className="h-12 w-12 rounded-xl bg-gray-900 flex items-center justify-center text-white font-bold text-xl">
              Q
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Sign in to Quietness.ai</CardTitle>
          <p className="text-sm text-gray-600 mt-2">
            Experience the power of AI-generated silence
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignIn} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="rounded-xl"
              />
            </div>

            {!forgotPassword ? (
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded-xl"
                />
              </div>
            ) : (
              <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                <p className="text-sm text-blue-900 text-center">
                  That's okay, we trust you. Just enter your username.
                </p>
              </div>
            )}

            {error && (
              <div className="p-3 bg-red-50 rounded-xl border border-red-200">
                <p className="text-sm text-red-900 text-center">{error}</p>
              </div>
            )}

            <Button
              type="submit"
              className="w-full rounded-xl bg-gray-900 hover:bg-gray-800"
            >
              Sign in
            </Button>

            {!forgotPassword && (
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => {
                    setForgotPassword(true);
                    setError("");
                  }}
                  className="text-sm text-gray-600 hover:text-gray-900 hover:underline"
                >
                  Forgot password?
                </button>
              </div>
            )}

            <div className="pt-4 border-t text-center">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="text-sm text-gray-600 hover:text-gray-900 hover:underline"
              >
                Back to home
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
