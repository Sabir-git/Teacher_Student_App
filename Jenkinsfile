@Library('Shared@main')
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                script {
                    clone('https://github.com/Sabir-git/Teacher_Student_App.git' , 'main')
                }        
            }
        }
        stage('cleanup'){
            steps {
                sh 'docker compose down || true'
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
    post {
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
