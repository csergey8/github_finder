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
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    //Show profile
                    ui.clearAlert();
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
            .catch( err => console.log(err));
    } else {
        // Clear profile
        ui.clearProfile();
    }
});