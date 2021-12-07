package br.com.springboot.crudCliente.service.exceptions;

public class DataIntergrityViolationException extends RuntimeException {

    public DataIntergrityViolationException(String message, Throwable cause) {
        super(message, cause);
    }

    public DataIntergrityViolationException(String message) {
        super(message);
    }
}
