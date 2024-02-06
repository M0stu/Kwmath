import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import { getSession } from "@auth0/nextjs-auth0";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
  
  const { isLoading, error, user } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>

<div className="flex min-h-screen w-full items-center justify-center bg-gray-800 text-center text-white">
        <div>
          <div>
          <Image
      src="/../public/Logo.JPG"
      width={500}
      height={175}
      alt="LOGO"
    />
        {/* <Image
      src="/../public/school.jpg"
      width={300}
      height={200}
      alt="LOGO"
    /> */}
            {/* <FontAwesomeIcon
              icon={faRobot}
              className="mb-2 text-6xl text-emerald-200"
            /> */}
          </div>
          <h1 className="mt-2 text-lg">Welcome to Kuwait Math Ai</h1>
          <h2 className="mt-2 text-lg">Created by ABDUL HAMEED AL-SANE Education Establishment</h2>
          <h2 className="mt-2 text-lg">مؤسسة عبدالحميد الصانع التعليمية</h2>
          {/* <p className="mt-2 text-lg">Log in with your account to continue</p> */}
          <div className="mt-4 flex justify-center gap-3">
            {!user && (
              <>
                <Link href="/api/auth/login" className="btn">
                  Login
                </Link>
                <Link href="/api/auth/signup" className="btn">
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

    {/* <div>
      <Head>
        <title>Kuwait Math</title>
      </Head>
      <h1>Welcome to Kuwait Math Ai</h1>
      <h2>Created by ABDUL HAMEED AL-SANE Education Establishment</h2>
      <h2> مؤسسة عبدالحميد الصانع التعليمية</h2>
      <div>
        {!!user &&  <Link href={"/api/auth/logout"} > Logout</Link>

        }
        {!user && <Link href={"/api/auth/login"} > Login</Link> }
      </div>
    </div> */}
    </>
  );

}


export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx.req, ctx.res);
  if (!!session) {
    return {
      redirect: {
        destination: "/chat",
      },
    };
  }

  return {
    props: {},
  };
};
