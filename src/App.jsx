import React, { useEffect, useState } from "react";

const ProfileCard = ({ profile }) => {
  const { name, email, picture } = profile;

  if (!name || !email || !picture) return null;

  return (
    <div className="max-w-sm mx-auto rounded bg-gray-50 shadow p-2 text-center">
      <img className="w-24 h-24 mx-auto rounded-full" src={picture} alt="" />
      <h1 className="text-xl">{name}</h1>
      <p className="text-gray-500">{email}</p>
    </div>
  );
};

export default function App() {
  const [count, setCount] = useState(0);
  const [profile, setProfile] = useState({});
  const [online, setOnline] = useState(true);

  const fetchUser = async () => {
    if (!online) return;
    const res = await fetch("https://randomuser.me/api/");
    const { results } = await res.json();
    setProfile({
      name: results[0].name.first,
      email: results[0].email,
      picture: results[0].picture.medium,
    });
  };

  useEffect(() => {
    if (online) {
      setProfile({});
    }
  }, [online]);

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="w-56 text-center mx-auto py-20">
        <h1 className="text-green-500">{online ? "Online" : "Offline"}</h1>

        <button
          onClick={() => setCount(count + 1)}
          className="px-3 py-1 border border-gray-500"
          id="button"
        >
          You Clicked Me {count}
        </button>
        <button
          onClick={fetchUser}
          className="mt-10 px-3 py-1 border border-gray-500"
          id="button"
        >
          Next Profile
        </button>
        <button
          onClick={() => setOnline(!online)}
          className="mt-10 px-3 py-1 border border-gray-500"
          id="button"
        >
          {online ? "Logout" : "Login"}
        </button>
      </div>
      <ProfileCard profile={profile} />
    </div>
  );
}
