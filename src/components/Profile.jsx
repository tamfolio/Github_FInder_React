import React, {useState}  from 'react';

function Profile() {
    const[data, setData] = useState({});
    const[username, setUsername] = useState("");
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
        const repoJson = await repositories.json();
        // console.log(repoJson);

        if(profileJson) {
            setData(profileJson);
            setRepositories(repoJson);
        }
    }
  return (
    <div className='git-container'>
        <input
         type="search"
         name='Search-Bar'
         value={username}
         onChange={onChangeHandler}
         placeholder='Search for a Github User' />
         <button className='btn'
            onClick={submitHandler}
            type='submit'
         >Proceed</button>

        
    </div>
    );
}

export default Profile;
