// function to generate .env file
function generateEnvFile(data) {
    return `
    DB_NAME='${data.database}'
    DB_USER='${data.username}'
    DB_PW='${data.password}'    
    `
}

module.exports = generateEnvFile;