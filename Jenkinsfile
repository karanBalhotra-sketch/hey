pipeline {
    agent any
    tools {
        nodejs 'NodeJS'  // Ensure NodeJS is installed and configured in Jenkins
    }
    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    // Install project dependencies using npm
                    bat 'npm install'
                }
            }
        }
        stage('Build React App') {
            steps {
                script {
                    // Build the React app for production
                    bat 'npm run build'
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    // Run tests, allowing no tests to pass and detect open handles
                    bat 'npm test -- --passWithNoTests --detectOpenHandles'
                }
            }
        }
        stage('Lint Code') {
            steps {
                script {
                    // Use npx to run ESLint from node_modules in the project
                    bat 'npx eslint "src/**/*.js" --fix --format json --output-file eslint-report.json'
                }
            }
        }
        stage('Create ZIP Artifact') {
            steps {
                script {
                    // Use PowerShell for Windows to create a ZIP of the build folder
                    bat 'powershell Compress-Archive -Path build\\* -DestinationPath build.zip'
                }
            }
        }
        stage('Archive Artifact') {
            steps {
                script {
                    // Archive the ZIP file as an artifact in Jenkins
                    archiveArtifacts artifacts: 'build.zip', allowEmptyArchive: false
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    // Simulate deployment using echo
                    echo 'Deploying the application to the staging environment...'
                }
            }
        }
        stage('Release') {
            steps {
                script {
                    // Simulate release using echo
                    echo 'Releasing the application to production...'
                }
            }
        }
    }
    post {
        always {
            // Clean up the workspace to avoid storing unnecessary files
            cleanWs()
        }
    }
}
