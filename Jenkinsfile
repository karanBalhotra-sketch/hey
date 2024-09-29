=pipeline {
    agent any
    tools {
        nodejs 'NodeJS'  // Ensure NodeJS is configured in Jenkins
    }
    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    bat 'npm install'  // Install dependencies
                }
            }
        }
        stage('Build React App') {
            steps {
                script {
                    bat 'npm run build'  // Build the React app
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    bat 'npm test -- --passWithNoTests --detectOpenHandles'  // Run tests
                }
            }
        }
        stage('Lint Code') {
            steps {
                script {
                    bat 'npm run lint'  // Run ESLint and generate JSON report
                }
            }
        }
        stage('Archive Lint Report') {
            steps {
                script {
                    archiveArtifacts artifacts: 'eslint-report.json', allowEmptyArchive: false  // Archive the ESLint report
                }
            }
        }
        stage('Create ZIP Artifact') {
            steps {
                script {
                    bat 'powershell Compress-Archive -Path build\\* -DestinationPath build.zip'  // Create a ZIP file
                }
            }
        }
        stage('Archive Artifact') {
            steps {
                script {
                    archiveArtifacts artifacts: 'build.zip', allowEmptyArchive: false  // Archive the ZIP file
                }
            }
        }
    }
    post {
        always {
            cleanWs()  // Clean workspace after build
        }
    }
}
