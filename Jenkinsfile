Pipeline{
    agent any
    Stages{
        Stage('Checkout'){
            steps{
                git branch: 'main' url: 'https://github.com/Sabir-git/Teacher_Student_App.git'           }
        }
        Stage('Build'){
            steps{
                sh 'docker compose build'
            }
        }
        Stage('Test'){
            steps{
               sh 'docker compose up -d'
            }
        }
        Stage('Verify'){
            steps{
                sh 'docker compose ps'
                sh 'docker images'
            }
        }
    }
}
