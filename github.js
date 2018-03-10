class GitHub {
    constructor() {
        this.client_id = 'a75c1dca0356e1ee9e83';
        this.client_secret = '449a88c5f044ba063878cccdd54d108d199addc5';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}