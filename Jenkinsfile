pipeline {
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
                    // Run ESLint and output the results to a lint-report.txt file
                    bat 'npm run lint > lint-report.txt || exit 0'
                }
            }
        }
        stage('Create ZIP Artifact') {
            steps {
                script {
                    bat 'powershell Compress-Archive -Path build\\* -DestinationPath build.zip'  // Create a ZIP file of the build folder
                }
            }
        }
        stage('Archive Artifacts') {
            steps {
                script {
                    // Archive both the ZIP file and the ESLint report
                    archiveArtifacts artifacts: 'build.zip, lint-report.txt', allowEmptyArchive: false
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
