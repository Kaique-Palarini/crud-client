package br.com.springboot.crudCliente.service;

import br.com.springboot.crudCliente.model.Cliente;
import br.com.springboot.crudCliente.repository.IClienteRepository;
import br.com.springboot.crudCliente.service.exceptions.DataIntergrityViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import java.util.List;
import java.util.Optional;

@Service
public class ClienteService {

    @Autowired
    private IClienteRepository clienteRepository;

    public Cliente create(Cliente cliente) throws AddressException {
        validaEmail(cliente.getEmail());
        validaPorCpfEEmail(cliente);
        return clienteRepository.save(cliente);
    }

    public List<Cliente> findAll() {
        return clienteRepository.findAll();
    }

    public Cliente edit(Long id, Cliente cliente) throws AddressException {
        cliente.setId(id);
        Cliente clienteRetorno = findById(id);
        validaEmail(cliente.getEmail());
        validaPorCpfEEmail(cliente);
        return clienteRepository.save(cliente);
    }

    public void delete(Long id) {
        clienteRepository.deleteById(id);
    }

    public Cliente findById(Long id) {
        Optional<Cliente> cliente = clienteRepository.findById(id);
        return cliente.orElseThrow(() -> new DataIntergrityViolationException("Objeto não encontrado! Id: " + id));
    }

    private void validaPorCpfEEmail(Cliente cliente) {
        Optional<Cliente> obj = clienteRepository.findByCpf(cliente.getCpf());
        if (obj.isPresent() && obj.get().getId() != cliente.getId()){
            throw new DataIntergrityViolationException("CPF já cadastrado no sistema");
        }
        obj = clienteRepository.findByEmail(cliente.getEmail());
        if(obj.isPresent() && obj.get().getId() != cliente.getId()){
            throw new DataIntergrityViolationException("E-mail já cadastrado!");
        }
    }

    private void validaEmail(String email) throws AddressException {
        InternetAddress emailAddr = new InternetAddress(email);
        emailAddr.validate();
    }
}
