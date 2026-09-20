pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Sabir-git/Teacher_Student_App.git'
            }
        }

        stage('Build') {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Test') {
            steps {
                sh 'docker compose up -d'
            }
        }

        stage('Verify') {
            steps {
                sh 'docker compose ps'
                sh 'docker images'
            }
        }
    }
    post{
        always{
            sh 'docker compose logs --tail=100 || true'
        }
        success{
            echo 'pipeline completed successfully'
        }
       failure{
           echo 'pipeline failed. see above logs..'
       } 
    }
}
