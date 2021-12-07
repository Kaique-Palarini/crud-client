package br.com.springboot.crudCliente.model.enums;



public enum TipoTelefoneEnum {

    RESIDENCIAL(0, "Residencial"), COMERCIAL(1, "Comercial"), CELULAR(2, "Celular");

    private Integer codigo;
    private String descricao;

    private TipoTelefoneEnum(Integer codigo, String descricao){
        this.codigo = codigo;
        this.descricao = descricao;
    }

    public static TipoTelefoneEnum toEnum(Integer codigo){
        if (codigo == null){
            return null;
        }
        for (TipoTelefoneEnum x: TipoTelefoneEnum.values()){
            if(codigo.equals(x.codigo)){
                return x;
            }
        }
        throw  new IllegalArgumentException("Tipo de Telefone inválido");
    }

    public Integer getCodigo() {
        return codigo;
    }

    public String getDescricao() {
        return descricao;
    }

}
