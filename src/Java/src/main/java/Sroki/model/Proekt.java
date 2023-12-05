package Sroki.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Sroki.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Проект
 */
@Entity(name = "IISSrokiПроект")
@Table(schema = "public", name = "Проект")
public class Proekt {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Бюджет")
    private Integer бюджет;

    @Column(name = "Наименование")
    private String наименование;

    @Column(name = "Срок")
    private String срок;


    public Proekt() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getБюджет() {
      return бюджет;
    }

    public void setБюджет(Integer бюджет) {
      this.бюджет = бюджет;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }

    public String getСрок() {
      return срок;
    }

    public void setСрок(String срок) {
      this.срок = срок;
    }


}