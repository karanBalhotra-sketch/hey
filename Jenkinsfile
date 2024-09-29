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
                    // Run tests using Jest with --passWithNoTests and --detectOpenHandles
                    bat 'npm test -- --passWithNoTests --detectOpenHandles'
                }
            }
        }
    }
    post {
        always {
            // Archive the test results in Jenkins
            junit 'reports/test-results.xml'
        }
        success {
            echo 'Build and tests completed successfully.'
        }
        failure {
            echo 'Build or tests failed. Check logs for details.'
        }
    }
}
