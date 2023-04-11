import { Provider } from "next-auth/providers";
import { signIn } from "next-auth/react";

interface Props {
  providers: Provider;
}

function Login({ providers }: Props) {
  return (
    <>
      <div className="flex flex-col items-center space-y-20 pt-48 text-white">
        <div>
          {Object.values(providers).map((provider) => (
            <div
              key={provider.name}
              className="flex flex-col items-center space-y-5">
              <p className="text-3xl tracking-wider">You need to login...</p>
              <button
                className="hover border border-white/30 px-5 py-3 transition duration-200 hover:border-white hover:bg-white/10"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
                Google
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Login;
