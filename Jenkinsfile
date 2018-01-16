pipeline {
  agent any
  stages {
    stage('passo a') {
      parallel {
        stage('passo a1') {
          steps {
            sh 'echo hola do passo a1'
          }
        }
        stage('passo a2') {
          steps {
            sh 'echo hola do passo a2'
          }
        }
        stage('passo a3') {
          steps {
            sh 'echo hola do passo a3'
          }
        }
      }
    }
    stage('passo b') {
      parallel {
        stage('passo b1') {
          steps {
            sh 'echo hola do passo b1'
          }
        }
        stage('passo b2') {
          steps {
            sh 'echo hola do passo b2'
          }
        }
        stage('passo b3') {
          steps {
            sh 'echo hola do passo b3'
          }
        }
      }
    }
  }
}