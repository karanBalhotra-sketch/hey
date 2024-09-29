pipeline {
    agent any
    tools {
        nodejs 'NodeJS'  // Ensure 'NodeJS' is configured in Jenkins as a tool
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
                    // Run tests, allowing no tests to pass, and use --detectOpenHandles to identify issues
                    bat 'npm test -- --passWithNoTests --detectOpenHandles'
                }
            }
        }
    }
}
