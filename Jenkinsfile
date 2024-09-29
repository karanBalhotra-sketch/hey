pipeline {
    agent any
    tools {
        nodejs 'NodeJS'  // Ensure 'NodeJS' is configured in Jenkins
    }
    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    bat 'npm install'  // Install dependencies using npm
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    bat 'npm run build'  // Build the React project
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    // Run tests using Jest with --detectOpenHandles to find any open handles causing the process to hang
                    bat 'npm test -- --detectOpenHandles'
                }
            }
        }
    }
}
