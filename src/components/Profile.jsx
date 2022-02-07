import React, {useState}  from 'react';

function Profile() {
    const[data, setData] = useState({});
    const[username, setUsername] = useState({});
    const[repositories, setRepositories] = useState({});

    const onChangeHandler = e => {
        setUsername(e.target.value);
    }

    const submitHandler = async e => {
        e.preventDefault();

        const profile = await fetch(`https://api.github.com/users/${username}`);
        const profileJson = await profile.json();
        // console.log(profileJson);

        const repositories = await fetch(profileJson.repos_url);
        const repoJson =repositories
    }
  return (
    <div>
        <input
         type="text"
         value={username}
         onChange={onChangeHandler} />
         <button
            onClick={submitHandler}
            type='submit'
         >Search</button>
    </div>
    );
}

export default Profile;
