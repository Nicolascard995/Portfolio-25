# 🔗 Configuración de Enlaces - Dozo.Tech

Este archivo contiene todas las direcciones de enlaces del sitio web organizadas por secciones para facilitar su configuración y mantenimiento.

---

## 📱 **NAVEGACIÓN PRINCIPAL**

### Header.tsx
| Elemento | Ubicación | Estado Actual | Dirección Sugerida |
|----------|-----------|---------------|-------------------|
| Logo DozoTech | Header | Sin enlace | `/${currentLocale}` |
| "Empezar ahora" | Header | Sin acción | `/${currentLocale}#contacto` |

### Enlaces de Navegación
| Enlace | Ubicación | Dirección Actual | Dirección Sugerida |
|--------|-----------|------------------|-------------------|
| Inicio | Header | `/${currentLocale}#inicio` | ✅ Correcto |
| Como trabajo | Header | `/${currentLocale}#como-trabajo` | ✅ Correcto |
| Soluciones | Header | `/${currentLocale}#soluciones` | ✅ Correcto |
| Contacto | Header | `/${currentLocale}#contacto` | ✅ Correcto |

---

## 🎯 **SECCIONES PRINCIPALES**

### HeroSection.tsx
| Elemento | Ubicación | Estado Actual | Dirección Sugerida |
|----------|-----------|---------------|-------------------|
| "Ver cómo trabajo" | Hero CTA | Sin acción | `/${currentLocale}#como-trabajo` |

### ApproachSection.tsx
| Elemento | Ubicación | Estado Actual | Dirección Sugerida |
|----------|-----------|---------------|-------------------|
| "Leer la carta a mi yo futuro" | Approach CTA | Sin acción | `/${currentLocale}/blog/future-letter` |

### PortfolioSection.tsx
| Elemento | Ubicación | Estado Actual | Dirección Sugerida |
|----------|-----------|---------------|-------------------|
| "Probar Demo" (Restaurant Revenue) | Portfolio | Abre chatbot | `/https://restaurant-revenue-prediction-tjk8.onrender.com/` |
| "Probar Demo" (Chatbot) | Portfolio | Abre chatbot | `/${currentLocale}/demo/chatbot` |

---

## 🧠 **SECCIÓN RESEARCH**

### ResearchSection.tsx
| Elemento | Ubicación | Estado Actual | Dirección Sugerida |
|----------|-----------|---------------|-------------------|
| Botón "Anterior" | Navegación | Funcional | ✅ Correcto |
| Botón "Siguiente" | Navegación | Funcional | ✅ Correcto |
| Indicadores de puntos | Navegación | Funcional | ✅ Correcto |

### MLProject.tsx
| Elemento | Ubicación | Estado Actual | Dirección Sugerida |
|----------|-----------|---------------|-------------------|
| "Ver repositorio en GitHub" | Proyecto | `https://github.com/tu-usuario/ml-project` | `https://github.com/Nicolascard995/course_ml_MindsDB` |
| "Ver perfil en LinkedIn" | Proyecto | `https://www.linkedin.com/in/nicolascardozo95arg/` |
| "Contactar por email" | Proyecto | `mailto:nicolas@dozo.tech` | ✅ Correcto | (ESTOY HAY QUE ELIMINAR POR COMPLETO, TAMBIEN EL BOTON, no quiero dejar mi mail en ninguna parte del sitio, si alguien quiere contactarme que usen mis redes o mediante el chatbot)

### FruitClassifierProject.tsx
| Elemento | Ubicación | Estado Actual | Dirección Sugerida |
|----------|-----------|---------------|-------------------|
| "Probar Demo" | Proyecto | `href="#"` | `/${currentLocale}/demo/fruit-classifier`   (ESTOY HAY QUE ELIMINAR POR COMPLETO, TAMBIEN EL BOTON) |
| "Ver repositorio" | Proyecto | `href="#"` | `https://github.com/Nicolascard995/Fruit_Classification_Kaggle` |
| "Documentación" (CaMBIAR para ahcer referenci a abir el post en medium) | Proyecto | `href="#"` | `https://medium.com/@nicolascard95/fruit-classification-transfer-learning-with-resnet-1392b7b52040` |
| "Contactar" | Proyecto | `href="#"` | `/${currentLocale}#contacto` |  (ESTOY HAY QUE ELIMINAR POR COMPLETO, TAMBIEN EL BOTON)

### PyTorchProject.tsx
| Elemento | Ubicación | Estado Actual | Dirección Sugerida |
|----------|-----------|---------------|-------------------|
| *No tiene enlaces externos específicos* | - | - | - |https://github.com/Nicolascard995/chatbotpytorch

### ConvolutionalClassifierProject.tsx
| Elemento | Ubicación | Estado Actual | Dirección Sugerida |
|----------|-----------|---------------|-------------------|
| "Repositorio en GitHub" | Proyecto | `https://github.com/tu_usuario/convolutional_classifier` | `https://github.com/Nicolascard995/convolutional_classifierr` |

---

## 🦶 **FOOTER**

### Footer.tsx
| Elemento | Ubicación | Estado Actual | Dirección Sugerida |
|----------|-----------|---------------|-------------------|
| LinkedIn | Footer | `https://linkedin.com/in/nicocard95` | https://www.linkedin.com/in/nicolascardozo95arg/ |
| GitHub | Footer | `https://github.com/nicocard95` | https://github.com/Nicolascard995|
| Twitter (recuerda que se llama X ahora, usa el nombre y logo correcto ) | Footer | `https://twitter.com/nicocard95` | https://x.com/dozo_tech |
| Política de Privacidad | Footer | `/${currentLocale}/privacy` | ✅ Correcto |
| Términos de Servicio | Footer | `/${currentLocale}/terms` | ✅ Correcto |
| Cookies | Footer | `/${currentLocale}/cookies` | ✅ Correcto |

---

## 🎮 **COMPONENTES FLOTANTES**

### ChatbotFloat.tsx
| Elemento | Ubicación | Estado Actual | Dirección Sugerida |
|----------|-----------|---------------|-------------------|
| Botón abrir chatbot | Float | Funcional | ✅ Correcto |
| Botón cerrar chatbot | Float | Funcional | ✅ Correcto |
| Botón enviar mensaje | Float | Funcional | ✅ Correcto |

### LeadCaptureFloat.tsx
| Elemento | Ubicación | Estado Actual | Dirección Sugerida |
|----------|-----------|---------------|-------------------|
| Botón abrir formulario | Float | Funcional | ✅ Correcto |
| Botón cerrar formulario | Float | Funcional | ✅ Correcto |
| Botón enviar formulario | Float | Funcional | ✅ Correcto |

---

## ⚠️ **PÁGINAS DE ERROR**

### error.tsx / not-found.tsx
| Elemento | Ubicación | Estado Actual | Dirección Sugerida |
|----------|-----------|---------------|-------------------|
| "Volver a la página principal" (404) | Error | `/${currentLocale}` | ✅ Correcto |
| "Intentar de nuevo" (500) | Error | `/${currentLocale}` | ✅ Correcto |

---

## 🎯 **PÁGINAS DE DEMO**

### AnalyticsDemoClient.tsx
| Elemento | Ubicación | Estado Actual | Dirección Sugerida |
|----------|-----------|---------------|-------------------|
| "Volver" | Demo | `/` | `/${currentLocale}` |

---

## 📋 **RESUMEN DE ENLACES A CONFIGURAR**

### 🔴 **PRIORIDAD ALTA - Sin dirección actual:**
1. **Logo DozoTech** - Necesita enlace a página principal
2. **"Empezar ahora"** (Header) - Necesita acción
3. **"Ver cómo trabajo"** (Hero) - Necesita acción
4. **"Leer la carta a mi yo futuro"** (Approach) - Necesita acción
5. **"Probar Demo"** (Fruit Classifier) - Necesita dirección
6. **"Ver repositorio"** (Fruit Classifier) - Necesita dirección
7. **"Documentación"** (Fruit Classifier) - Necesita dirección
8. **"Contactar"** (Fruit Classifier) - Necesita dirección

### 🟡 **PRIORIDAD MEDIA - URLs de placeholder:**
1. **ML Project GitHub** - `https://github.com/tu-usuario/ml-project` → `https://github.com/nicocard95/ml-project`
2. **ML Project LinkedIn** - `https://linkedin.com/in/tu-perfil` → `https://linkedin.com/in/nicocard95`
3. **Convolutional Classifier GitHub** - `https://github.com/tu_usuario/convolutional_classifier` → `https://github.com/nicocard95/convolutional-classifier`

### 🟢 **PRIORIDAD BAJA - Funcionando correctamente:**
- Todos los enlaces de navegación
- Enlaces del footer
- Componentes flotantes
- Páginas de error

---

## 🛠️ **INSTRUCCIONES DE CONFIGURACIÓN**

### Para configurar los enlaces:

1. **Actualizar URLs de GitHub:**
   - Reemplazar `tu-usuario` con `nicocard95`
   - Usar kebab-case para nombres de repositorios

2. **Crear páginas de demo:**
   - `/demo/restaurant-revenue`
   - `/demo/chatbot`
   - `/demo/fruit-classifier`

3. **Crear páginas legales:**
   - `/privacy`
   - `/terms`
   - `/cookies`

4. **Crear página de blog:**
   - `/blog/future-letter`

5. **Configurar acciones de botones:**
   - Agregar `onClick` handlers
   - Implementar scroll suave para anclas
   - Configurar navegación programática

---

## 📝 **NOTAS IMPORTANTES**

- Todos los enlaces internos deben usar `/${currentLocale}` para mantener la internacionalización
- Los enlaces externos deben abrirse en nueva pestaña (`target="_blank"`)
- Los enlaces de email deben usar `mailto:`
- Los enlaces de teléfono deben usar `tel:`

---

*Última actualización: [Fecha actual]*
*Responsable: [Tu nombre]* 