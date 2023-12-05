package Sroki.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Sroki.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Календарь
 */
@Entity(name = "IISSrokiКалендарь")
@Table(schema = "public", name = "Календарь")
public class Kalendar {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Трудозатраты")
    private Integer трудозатраты;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Uchastnik")
    @Convert("Uchastnik")
    @Column(name = "Участник", length = 16, unique = true, nullable = false)
    private UUID _uchastnikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Uchastnik", insertable = false, updatable = false)
    private Uchastnik uchastnik;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Proekt")
    @Convert("Proekt")
    @Column(name = "Проект", length = 16, unique = true, nullable = false)
    private UUID _proektid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Proekt", insertable = false, updatable = false)
    private Proekt proekt;


    public Kalendar() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getТрудозатраты() {
      return трудозатраты;
    }

    public void setТрудозатраты(Integer трудозатраты) {
      this.трудозатраты = трудозатраты;
    }


}