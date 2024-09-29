pipeline {
    agent any
    tools {
        nodejs 'NodeJS'  // Ensure 'NodeJS' is configured in Jenkins as a tool
    }
    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    bat 'npm install'  // Use 'bat' instead of 'sh' for Windows
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    bat 'npm run build'  // Use 'bat' instead of 'sh' for Windows
                }
            }
        }
    }
}
