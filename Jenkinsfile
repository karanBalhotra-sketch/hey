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
                    // Run tests using Jest with --passWithNoTests to prevent failures when no tests are found
                    bat 'npm test -- --passWithNoTests --detectOpenHandles'
                }
            }
        }
    }
}
