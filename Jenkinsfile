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
                    bat 'npm test --passWithNoTests'  // Run tests, allow no tests to pass
                }
            }
        }
    }
    post {
        always {
            // Optionally archive test results
            junit 'reports/test-results.xml'  // Ensure Jest generates JUnit test results, or remove this line
        }
    }
}
