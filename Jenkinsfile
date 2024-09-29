pipeline {
    agent any
    tools {
        nodejs 'NodeJS'  // Ensure NodeJS is configured in Jenkins
    }
    stages {
        stage('Install Netlify CLI') {
            steps {
                script {
                    // Install Netlify CLI globally
                    bat 'npm install -g netlify-cli'
                }
            }
        }
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
                    // Run tests with the correct flags to prevent failures if no tests exist
                    bat 'npm test -- --passWithNoTests --detectOpenHandles'
                }
            }
        }
        stage('Lint Code') {
            steps {
                script {
                    // Run ESLint, output results to lint-report.txt
                    bat 'npm run lint > lint-report.txt || exit 0'
                }
            }
        }
        stage('Create ZIP Artifact') {
            steps {
                script {
                    // Use PowerShell to create a ZIP file of the build folder
                    bat 'powershell Compress-Archive -Path build\\* -DestinationPath build.zip'
                }
            }
        }
        stage('Archive Artifacts') {
            steps {
                script {
                    // Archive the build.zip and lint-report.txt as Jenkins artifacts
                    archiveArtifacts artifacts: 'build.zip, lint-report.txt', allowEmptyArchive: false
                }
            }
        }
        stage('Deploy to Netlify') {
            environment {
                NETLIFY_AUTH_TOKEN = credentials('NETLIFY_AUTH_TOKEN')  // Use the stored Netlify token
            }
            steps {
                script {
                    // Deploy to Netlify using Netlify CLI
                    bat "netlify deploy --prod --dir=build --auth=$NETLIFY_AUTH_TOKEN --message 'Automated deploy from Jenkins'"
                }
            }
        }
    }
    post {
        always {
            // Clean workspace after the build is complete
            cleanWs()
        }
    }
}
