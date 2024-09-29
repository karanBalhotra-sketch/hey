pipeline {
    agent any
    tools {
        nodejs 'NodeJS'  // Ensure NodeJS is configured in Jenkins
    }
    environment {
        NETLIFY_AUTH_TOKEN = credentials('NETLIFY_AUTH_TOKEN')  // Use stored Netlify token
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
        stage('Deploy to Netlify') {
            steps {
                withEnv(["NETLIFY_AUTH_TOKEN=${env.NETLIFY_AUTH_TOKEN}"]) {
                    // Deploy to Netlify using Netlify CLI, ensuring the directory is already linked
                    bat 'netlify deploy --prod --dir=build --message "Automated deploy from Jenkins"'
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
