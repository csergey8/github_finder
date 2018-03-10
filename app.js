// GitHub Init
const github = new GitHub();

// UI init 
const ui = new UI();

// Search input 
const searchUser = document.getElementById('search-user');

// Search Input Event Listener
searchUser.addEventListener('keyup', (e) =>{
    // Get input text
    const userText = e.target.value;

    if(userText !== '') {
        // make http request
        github.getUser(userText)
            .then( data => {
                if(data.profile.message === 'Not Found') {
                    //Show alert

                } else {
                    //Show profile
                    ui.showProfile(data.profile)
                }
            })
            .catch( err => console.log(err));
    } else {
        // Clear profile

    }
});