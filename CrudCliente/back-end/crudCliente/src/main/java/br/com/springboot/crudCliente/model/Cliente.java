package br.com.springboot.crudCliente.model;

import br.com.springboot.crudCliente.model.enums.TipoTelefoneEnum;
import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@AllArgsConstructor
@Entity
public class Cliente implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column(unique = true)
    private String cpf;

    @Column(nullable = false)
    private String bairro;

    @Column(nullable = false)
    private String cidade;

    @Column(nullable = false)
    private String uf;

    @Column(nullable = false)
    private String cep;

    @Column(nullable = false)
    private String logradouro;

    @Column(nullable = false)
    private Long numero;

    @Column(nullable = false)
    private String telefone;

    @Column(nullable = false)
    private TipoTelefoneEnum tipoTelefone;

    @Column(nullable = false)
    private String email;

    @Column(nullable = true)
    private String complemento;

    public Cliente(){
        super();
    }
}
