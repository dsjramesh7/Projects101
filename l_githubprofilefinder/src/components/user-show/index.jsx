import React from "react";

const User = ({ user }) => {
  const { avatar_url, bio, followers, public_repos, login, name } = user;

  return (
    <div className="max-w-full   mx-auto p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out text-center space-y-4">
      <img
        src={avatar_url}
        alt="profile"
        className="w-24 h-24 mx-auto rounded-full border-4 border-indigo-500"
      />
      <h2 className="text-xl font-bold text-gray-800">{name || login}</h2>
      <a
        href={`https://github.com/${login}`}
        target="_blank"
        className="text-indigo-600 hover:underline"
      >
        {login}
      </a>
      {bio && <p className="text-gray-600">{bio}</p>}
      <div className="flex justify-center gap-6 text-sm text-gray-700 pt-4 border-t">
        <div>
          <span className="font-semibold">{followers}</span> Followers
        </div>
        <div>
          <span className="font-semibold">{public_repos}</span> Repos
        </div>
      </div>
    </div>
  );
};

export default User;
