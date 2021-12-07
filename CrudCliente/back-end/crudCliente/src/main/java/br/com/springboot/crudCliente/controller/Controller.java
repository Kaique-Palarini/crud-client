package br.com.springboot.crudCliente.controller;

import br.com.springboot.crudCliente.model.Cliente;
import br.com.springboot.crudCliente.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.mail.internet.AddressException;
import java.util.List;

@RestController
@RequestMapping("/cliente")
public class Controller {

    @Autowired
    private ClienteService clienteService;

    @PostMapping("/create")
    public ResponseEntity<Cliente> create(@RequestBody Cliente cliente) throws AddressException {
     return ResponseEntity.ok().body(clienteService.create(cliente));
    }

    @GetMapping("/findall")
    public ResponseEntity<List<Cliente>> findAll(){
        return ResponseEntity.ok().body(clienteService.findAll());
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Cliente> edit(@PathVariable Long id, @RequestBody Cliente cliente) throws AddressException {
        return ResponseEntity.ok().body(clienteService.edit(id, cliente));
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Cliente> delete(@PathVariable Long id){
        clienteService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
