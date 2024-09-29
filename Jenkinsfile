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
        stage('Run Tests') {  // New stage for running Jest tests
            steps {
                script {
                    bat 'npm test'  // Run tests using Jest
                }
            }
        }
    }
    post {
        always {
            // Archive test results or logs if needed
            junit 'reports/test-results.xml'  // If Jest is configured to generate JUnit reports (optional)
        }
    }
}
