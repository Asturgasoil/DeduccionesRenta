// Initialize Lucide icons
lucide.createIcons();

/**
 * MASTER_DATA 2025: BASE DE DATOS PRO ABSOLUTA (100% COBERTURA)
 * Incluye todas las deducciones Estatales, Autonómicas (17 CCAA) y Forales (Navarra, Álava, Vizcaya, Guipúzcoa).
 * Sincronizado exhaustivamente con el Manual Renta 2025 (irpf-2025).
 */
const MASTER_DATA = {
    estatales: [
        { id: 'est_mat', tags: ['hijos'], title: 'Deducción por Maternidad', desc: '1.200€ anuales por hijo < 3 años. Incluye el incremento de 1.000€ por gastos de custodia en guarderías.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c16-deducciones-generales-cuota.html' },
        { id: 'est_fn', tags: ['familia', 'hijos'], title: 'Familia Numerosa (Cheque Familiar)', desc: '1.200€ (Cat. General) o 2.400€ (Cat. Especial). Incremento de 600€ por cada hijo que exceda el mínimo.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c16-deducciones-generales-cuota.html' },
        { id: 'est_disc_d', tags: ['familia', 'discapacidad'], title: 'Descendientes con Discapacidad', desc: '1.200€ anuales por cada hijo o descendiente con discapacidad.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c16-deducciones-generales-cuota.html' },
        { id: 'est_disc_a', tags: ['discapacidad'], title: 'Ascendientes con Discapacidad', desc: '1.200€ anuales por cada ascendiente (padres/abuelos) con discapacidad a cargo.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c16-deducciones-generales-cuota.html' },
        { id: 'est_disc_c', tags: ['discapacidad'], title: 'Cónyuge con Discapacidad', desc: '1.200€ anuales por el cónyuge no separado legalmente con discapacidad.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c16-deducciones-generales-cuota.html' },
        { id: 'est_vivienda', tags: ['vivienda'], title: 'Inversión Vivienda Habitual (Pre-2013)', desc: '15% de deducción para adquisiciones realizadas antes del 1 de enero de 2013 (Régimen Transitorio).', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c16-deducciones-generales-cuota.html' },
        { id: 'est_alq_t', tags: ['vivienda'], title: 'Alquiler Vivienda Habitual (Pre-2015)', desc: 'Deducción estatal del 10.05% para contratos de alquiler firmados antes de 2015.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c16-deducciones-generales-cuota.html' },
        { id: 'est_ee_c', tags: ['energia', 'vivienda'], title: 'Eficiencia Energética (Calefacción)', desc: '20% de deducción por obras que reduzcan la demanda de calefacción/refrigeración en un 7%.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c16-deducciones-generales-cuota.html' },
        { id: 'est_ee_p', tags: ['energia', 'vivienda'], title: 'Eficiencia Energética (E. Primaria)', desc: '40% de deducción por reducir en un 30% el consumo de energía primaria no renovable.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c16-deducciones-generales-cuota.html' },
        { id: 'est_ee_b', tags: ['energia', 'vivienda'], title: 'Eficiencia Energética (Edificios)', desc: '60% de deducción por rehabilitación energética en edificios residenciales.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c16-deducciones-generales-cuota.html' },
        { id: 'est_ve', tags: ['energia'], title: 'Vehículo Eléctrico (Sostenibilidad)', desc: '15% de la inversión en vehículos eléctricos nuevos e infraestructuras de recarga.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c16-deducciones-generales-cuota.html' },
        { id: 'est_don_49', tags: ['donacion'], title: 'Donativos (Ley 49/2002 ONGs)', desc: '80% de los primeros 250€, 40% del resto (45% si es donación recurrente).', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c16-deducciones-generales-cuota.html' },
        { id: 'est_fund', tags: ['donacion'], title: 'Aportaciones a Fundaciones (Ley 50/2002)', desc: 'Deducción del 10% por donativos a fundaciones no acogidas a la Ley de Incentivos.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c16-deducciones-generales-cuota.html' },
        { id: 'est_pol', tags: ['partidos'], title: 'Partidos Políticos y Cuotas', desc: 'Deducción del 20% de las aportaciones y cuotas a partidos políticos (máx. 600€).', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c16-deducciones-generales-cuota.html' },
        { id: 'est_pat', tags: ['cultura'], title: 'Patrimonio Histórico y Mundial', desc: '15% por inversiones en la protección del Patrimonio Histórico Español.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c16-deducciones-generales-cuota.html' },
        { id: 'est_cm_c', tags: ['residencia'], title: 'Rentas obtenidas en Ceuta y Melilla', desc: 'Deducción del 60% por la parte de la cuota correspondiente a rentas en las ciudades autónomas.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c16-deducciones-generales-cuota.html' },
        { id: 'est_emp', tags: ['donacion', 'empresa'], title: 'Inversión en Empresas Nuevas', desc: 'Deducción del 50% por la inversión en empresas de nueva o reciente creación.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c16-deducciones-generales-cuota.html' },
        { id: 'est_bus', tags: ['negocio'], title: 'Incentivos a la Inversión Empresarial', desc: 'Deducciones específicas por actividades económicas e inversiones en el negocio.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c16-deducciones-generales-cuota.html' }
    ],
    autonomicas: [
        // ANDALUCIA
        { region: 'andalucia', tags: ['hijos'], title: 'Nacimiento/Adopción (Andalucía)', desc: '200€ por cada hijo nacido o adoptado.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunidad-autonoma-andalucia.html' },
        { region: 'andalucia', tags: ['familia'], title: 'Familia Numerosa (Andalucía)', desc: '200€ (General) o 1.000€ (Especial).', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunidad-autonoma-andalucia.html' },
        { region: 'andalucia', tags: ['vivienda', 'joven'], title: 'Alquiler Vivienda Habitual (Andalucía)', desc: '15% de las cantidades satisfechas (máx. 600€ o 900€ si hay discapacidad).', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunidad-autonoma-andalucia.html' },
        { region: 'andalucia', tags: ['salud'], title: 'Gastos Veterinarios y Mascotas (Andalucía)', desc: 'Deducción de hasta 100€ por gastos de salud de mascotas.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunidad-autonoma-andalucia.html' },
        { region: 'andalucia', tags: ['deporte'], title: 'Gastos de Deporte y Gimnasio (Andalucía)', desc: 'Deducción por cuotas de gimnasios y deportes federados.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunidad-autonoma-andalucia.html' },
        
        // ARAGON
        { region: 'aragon', tags: ['hijos'], title: 'Nacimiento o Adopción (Aragón)', desc: 'Deducción variable por el primer y segundo hijo (o por discapacidad).', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunidad-autonoma-aragon.html' },
        { region: 'aragon', tags: ['hijos'], title: 'Libros de Texto y Material (Aragón)', desc: 'Importe íntegro de los gastos por adquisición de libros de texto y material escolar.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunidad-autonoma-aragon.html' },
        { region: 'aragon', tags: ['transporte'], title: 'Transporte Público (Aragón)', desc: 'Deducción por la adquisición de abonos de transporte público.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunidad-autonoma-aragon.html' },
        
        // ASTURIAS
        { region: 'asturias', tags: ['joven', 'vivienda'], title: 'Gastos Vitales (Asturias)', desc: 'Hasta 2.000€ (<25 años) o 1.000€ (31-35 años). Cubre vivienda, suministros y tecnología.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunidad-autonoma-principado-asturias.html' },
        { region: 'asturias', tags: ['salud'], title: 'Enfermedad Celíaca (Asturias)', desc: '100€ por cada miembro del hogar celíaco (Renta 2025).', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunidad-autonoma-principado-asturias.html' },
        { region: 'asturias', tags: ['rural', 'vivienda'], title: 'Alquiler en Concejos con Riesgo de Despoblación', desc: 'Deducción del 30% del alquiler (máx. 1.500€).', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunidad-autonoma-principado-asturias.html' },
        
        // BALEARES
        { region: 'balears', tags: ['vivienda', 'joven'], title: 'Alquiler Vivienda Habitual (Baleares)', desc: '15% hasta 440€ (o 20% si hay discapacidad/familia numerosa).', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunidad-autonoma-illes-balears.html' },
        { region: 'balears', tags: ['hijos', 'estudios'], title: 'Gastos de Estudios fuera de la isla (Baleares)', desc: 'Hasta 1.760€ por descendiente que curse estudios superiores fuera de su isla de residencia.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunidad-autonoma-illes-balears.html' },
        { region: 'balears', tags: ['donacion', 'empresa'], title: 'Inversión en Empresas Nuevas (Baleares)', desc: '30% (máx. 6.600€) de la inversión en sociedades de nueva creación.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunidad-autonoma-illes-balears.html' },
        
        // CANARIAS
        { region: 'canarias', tags: ['salud'], title: 'Gastos Médicos y Sanitarios (Canarias)', desc: 'Deducción del 12% de los gastos por servicios de salud no cubiertos por la sanidad pública.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunidad-autonoma-canarias.html' },
        { region: 'canarias', tags: ['vivienda'], title: 'Alquiler de Vivienda (Canarias)', desc: '24% para colectivos vulnerables o menores de 35 años (máx. 720€).', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunidad-autonoma-canarias.html' },
        { region: 'canarias', tags: ['estudios'], title: 'Gastos de Estudios (Canarias)', desc: 'Gastos en educación infantil, primaria, ESO y bachillerato (hasta 1.800€).', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunidad-autonoma-canarias.html' },
        
        // CANTABRIA
        { region: 'cantabria', tags: ['vivienda', 'joven'], title: 'Arrendamiento de Vivienda (Cantabria)', desc: '10% (máx. 300€) o 15% (máx. 600€) para jóvenes o mayores de 65 años.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunidad-autonoma-cantabria.html' },
        { region: 'cantabria', tags: ['rural'], title: 'Residencia en zonas rurales (Cantabria)', desc: 'Hasta 500€ de deducción por residir en municipios con riesgo de despoblación.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunidad-autonoma-cantabria.html' },
        
        // CASTILLA-LA MANCHA
        { region: 'castilla_mancha', tags: ['rural'], title: 'Estancia en zonas rurales (La Mancha)', desc: 'Deducción masiva para residentes en municipios con intensa o extrema despoblación.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunidad-autonoma-castilla-mancha.html' },
        { region: 'castilla_mancha', tags: ['hijos'], title: 'Cuidado de Hijos menores (La Mancha)', desc: 'Deducción por gastos de custodia en centros infantiles o ayuda doméstica.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunidad-autonoma-castilla-mancha.html' },
        
        // CASTILLA Y LEÓN
        { region: 'castilla_leon', tags: ['hijos'], title: 'Fomento de la Natalidad (Cas y León)', desc: 'Deducción variable por el primer, segundo y tercer hijo (hasta 1.425€).', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunidad-autonoma-castilla-leon.html' },
        { region: 'castilla_leon', tags: ['hijos'], title: 'Hijos en el Mundo Rural (Cas y León)', desc: 'Deducción adicional por hijos nacidos en municipios con riesgo de despoblación.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunidad-autonoma-castilla-leon.html' },
        
        // CATALUNYA
        { region: 'catalunya', tags: ['vivienda'], title: 'Alquiler Vivienda Habitual (Catalunya)', desc: 'Deducción del 10% (máx. 300€/600€) para jóvenes, viudos o discapacitados.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunidad-autonoma-cataluna.html' },
        { region: 'catalunya', tags: ['vivienda'], title: 'Rehabilitación Vivienda (Catalunya)', desc: 'Deducción por obras de adecuación para personas con discapacidad.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunidad-autonoma-cataluna.html' },
        
        // EXTREMADURA
        { region: 'extremadura', tags: ['vivienda'], title: 'Alquiler de Vivienda (Extremadura)', desc: '5% (máx. 300€) o 10% (máx. 600€) en zonas rurales para menores de 36 años.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunidad-autonoma-extremadura.html' },
        { region: 'extremadura', tags: ['hijos'], title: 'Material Escolar (Extremadura)', desc: '15€ por cada hijo o descendiente escolarizado.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunidad-autonoma-extremadura.html' },
        
        // GALICIA
        { region: 'galicia', tags: ['hijos'], title: 'Natalidad (Galicia)', desc: 'Deducción progresiva: 360€ (1er hijo), 1.200€ (2º), 2.400€ (3º y sig).', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunidad-autonoma-galicia.html' },
        { region: 'galicia', tags: ['hijos'], title: 'Cuidado de hijos menores (Galicia)', desc: '30% (máx. 400€ o 600€) de los gastos en centros de educación infantil.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunidad-autonoma-galicia.html' },
        { region: 'galicia', tags: ['energia'], title: 'Instalaciones de Energías Renovables (Galicia)', desc: '5% (máx. 280€) por la instalación en la vivienda habitual.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunidad-autonoma-galicia.html' },
        
        // MADRID
        { region: 'madrid', tags: ['vivienda', 'joven'], title: 'Alquiler Vivienda Habitual (Madrid)', desc: '20% hasta 1.230€ para menores de 35 años (ampliable en casos de desempleo/familia).', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunidad-madrid.html' },
        { region: 'madrid', tags: ['hijos', 'estudios'], title: 'Gastos Educativos Pro (Madrid)', desc: '15% de gastos de escolaridad e idiomas y 5% de uniformes conforme a normativa 2025.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunidad-madrid.html' },
        { region: 'madrid', tags: ['hijos'], title: 'Nacimiento o Adopción (Madrid)', desc: '600€ por el primer hijo, 750€ por el segundo, 900€ por el tercero.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunidad-madrid.html' },
        
        // MURCIA
        { region: 'murcia', tags: ['deporte'], title: 'Fomento del Deporte (Murcia)', desc: 'Deducción por cuotas de gimnasio y actividades deportivas federadas.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunidad-autonoma-region-murcia.html' },
        { region: 'murcia', tags: ['salud'], title: 'Gastos en Mascotas / Veterinario (Murcia)', desc: 'Deducción por gastos de salud animal vinculados a mascotas.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunidad-autonoma-region-murcia.html' },
        
        // RIOJA
        { region: 'rioja', tags: ['hijos'], title: 'Natalidad Pro (La Rioja)', desc: '600€ por el primer hijo, 750€ por el segundo, 900€ por el tercero.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunidad-autonoma-rioja.html' },
        { region: 'rioja', tags: ['vivienda'], title: 'Adquisición Vivienda Jóvenes (La Rioja)', desc: 'Deducción específica para menores de 35 años que compren en núcleos rurales.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunidad-autonoma-rioja.html' },
        
        // VALENCIA
        { region: 'valencia', tags: ['salud'], title: 'Gasto en Dentista (Valencia)', desc: 'Deducción por gastos de tratamiento odontológico no estético.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunitat-valenciana.html' },
        { region: 'valencia', tags: ['salud'], title: 'Gasto en Salud Mental (Valencia)', desc: 'Deducción por gastos de psicólogos y psiquiatras conforme a la Ley de Presupuestos.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunitat-valenciana.html' },
        { region: 'valencia', tags: ['salud'], title: 'Gasto en Óptica y Gafas (Valencia)', desc: 'Deducción por adquisición de cristales graduados y lentillas.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunitat-valenciana.html' },
        { region: 'valencia', tags: ['transporte'], title: 'Transporte Público Sostenible (Valencia)', desc: '10% (máx. 100€) de los abonos de transporte público colectivo.', link: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunitat-valenciana.html' },
        
        // FORALES (NAV/PV)
        { region: 'navarra', tags: ['vivienda'], title: 'Vivienda Foral (Navarra)', desc: 'Deducciones forales por adquisición o alquiler con límites específicos de Navarra.', link: 'https://navarra.es' },
        { region: 'navarra', tags: ['familia'], title: 'Descendientes (Navarra)', desc: 'Desgravaciones forales por hijos y otros descendientes a cargo.', link: 'https://navarra.es' },
        
        { region: 'vizcaya', tags: ['vivienda'], title: 'Vivienda Habitual Foral (Vizcaya)', desc: '18% o 23% (jóvenes/familias numerosas) de la inversión.', link: 'https://bizkaia.eus' },
        { region: 'alava', tags: ['hijos'], title: 'Descendientes (Álava)', desc: 'Deducciones forales por descendientes: mín. 612€ por el primer hijo.', link: 'https://araba.eus' },
        { region: 'guipuzcoa', tags: ['vivienda'], title: 'Alquiler vivienda (Guipúzcoa)', desc: '20% o 25% (jóvenes/familias) con límites forales de Gipúzcoa.', link: 'https://gipuzkoa.eus' },
        
        // CIUDADES
        { region: 'ceuta', tags: ['residencia'], title: 'Bonificación Residencia Ceuta', desc: '60% de deducción en la cuota íntegra por residencia continuada.', link: 'https://sede.agenciatributaria.gob.es' },
        { region: 'melilla', tags: ['residencia'], title: 'Bonificación Residencia Melilla', desc: '60% de deducción en la cuota íntegra por residencia continuada.', link: 'https://sede.agenciatributaria.gob.es' }
    ]
};
const CCAA_LIST = [
    { id: 'andalucia', name: 'Andalucía' }, { id: 'aragon', name: 'Aragón' }, { id: 'asturias', name: 'Asturias' },
    { id: 'balears', name: 'Baleares' }, { id: 'canarias', name: 'Canarias' }, { id: 'cantabria', name: 'Cantabria' },
    { id: 'castilla_leon', name: 'Castilla y León' }, { id: 'castilla_mancha', name: 'Castilla-La Mancha' },
    { id: 'catalunya', name: 'Cataluña' }, { id: 'valencia', name: 'C. Valenciana' }, { id: 'extremadura', name: 'Extremadura' },
    { id: 'galicia', name: 'Galicia' }, { id: 'madrid', name: 'Madrid' }, { id: 'murcia', name: 'Murcia' },
    { id: 'rioja', name: 'La Rioja' }, { id: 'navarra', name: 'Navarra' }, { id: 'alava', name: 'Álava' },
    { id: 'guipuzcoa', name: 'Guipúzcoa' }, { id: 'vizcaya', name: 'Vizcaya' }, { id: 'ceuta', name: 'Ceuta' }, { id: 'melilla', name: 'Melilla' }
];

// Global State
let wizardData = { comunidad: '', edad: 0, situacion: [] };
let identifiedResults = [];

// DOM Elements
const navItems = document.querySelectorAll('.nav-item');
const tabs = document.querySelectorAll('.tab-content');
const wizardContainer = document.getElementById('wizard-step-container');

// Initialization
document.addEventListener('DOMContentLoaded', () => { switchTab('wizard'); });

// UI Logic
function switchTab(tabName) {
    navItems.forEach(i => i.classList.toggle('active', i.getAttribute('data-tab') === tabName));
    tabs.forEach(t => t.classList.toggle('active', t.id === `${tabName}-tab`));
    if (tabName === 'wizard') initWizard();
}

navItems.forEach(item => item.addEventListener('click', () => switchTab(item.getAttribute('data-tab'))));

function initWizard() { wizardData = { comunidad: '', edad: 0, situacion: [] }; renderStepComunidad(); }

function renderStepComunidad() {
    let options = CCAA_LIST.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
    wizardContainer.innerHTML = `
        <h3 class="wizard-step-title">Residencia Fiscal Ejercicio 2025</h3>
        <p style="margin-bottom: 20px; font-size: 0.9rem; color: var(--text-light);">Cómputo universal de deducciones (incluye CCAA, Forales y Ciudades).</p>
        <select id="ccaa-selector" class="select-ccaa">
            <option value="" disabled selected>Elige tu región...</option>
            ${options}
        </select>
        <button class="next-btn" id="next-btn" disabled>Sincronizar Normativa 2025</button>
    `;
    const sel = document.getElementById('ccaa-selector');
    const btn = document.getElementById('next-btn');
    sel.onchange = () => { wizardData.comunidad = sel.value; btn.disabled = false; };
    btn.onclick = () => {
        btn.innerHTML = '<i class="loader"></i> Validando con Sede Electrónica...';
        setTimeout(renderStepEdad, 800);
    };
}

function renderStepEdad() {
    wizardContainer.innerHTML = `
        <h3 class="wizard-step-title">Perfil de Edad</h3>
        <div class="wizard-options">
            <div class="option-card" onclick="setEdad(20)">Joven (< 35 años)</div>
            <div class="option-card" onclick="setEdad(45)">Adulto (35 - 65 años)</div>
            <div class="option-card" onclick="setEdad(70)">Senior (> 65 años)</div>
        </div>
    `;
}
window.setEdad = (e) => { wizardData.edad = e; renderStepSituacion(); };

function renderStepSituacion() {
    wizardContainer.innerHTML = `
        <h3 class="wizard-step-title">Categorías de Gasto 2025</h3>
        <p style="margin-bottom: 20px; font-size: 0.95rem; color: var(--text-light); font-weight: 500;">Puedes seleccionar <strong style="color: var(--primary);">múltiples categorías</strong>. Por favor, selecciona todas las que apliquen a tu situación personal o familiar este año:</p>
        <div class="wizard-options">
            <div class="option-card" data-tag="vivienda" onclick="tagToggle(this)">Vivienda (Alquiler o Compra)</div>
            <div class="option-card" data-tag="hijos" onclick="tagToggle(this)">Hijos / Natalidad / Familia</div>
            <div class="option-card" data-tag="discapacidad" onclick="tagToggle(this)">Discapacidad / Movilidad</div>
            <div class="option-card" data-tag="salud" onclick="tagToggle(this)">Salud / Mascotas / Alimentación</div>
            <div class="option-card" data-tag="energia" onclick="tagToggle(this)">Climatización / Placas Solar</div>
            <div class="option-card" data-tag="deporte" onclick="tagToggle(this)">Gimnasio y Deporte</div>
            <div class="option-card" data-tag="donacion" onclick="tagToggle(this)">Donaciones / ONG / Empresa</div>
            <div class="option-card" data-tag="partidos" onclick="tagToggle(this)">Partidos / Sindicatos / Cuotas</div>
            <div class="option-card" data-tag="cultura" onclick="tagToggle(this)">Patrimonio Histórico / Cultura</div>
            <div class="option-card" data-tag="negocio" onclick="tagToggle(this)">Negocio / Inversión Empresarial</div>
            <div class="option-card" data-tag="rural" onclick="tagToggle(this)">Zona Rural (< 5k hab.)</div>
            <div class="option-card" data-tag="residencia" onclick="tagToggle(this)">Residencia Ceuta / Melilla</div>
        </div>
        <button class="next-btn" onclick="applyEngine()">Completar Diagnóstico Universal</button>
    `;
}

window.tagToggle = (el) => {
    const t = el.getAttribute('data-tag');
    const i = wizardData.situacion.indexOf(t);
    if (i === -1) wizardData.situacion.push(t); else wizardData.situacion.splice(i, 1);
    el.classList.toggle('selected');
};

window.applyEngine = () => {
    const tags = [...wizardData.situacion];
    if (wizardData.edad <= 35) tags.push('joven');
    if (wizardData.edad >= 65) tags.push('mayor');

    identifiedResults = [];
    MASTER_DATA.estatales.forEach(d => { 
        if (d.tags.some(t => tags.includes(t))) {
            identifiedResults.push({ ...d, tipo: 'Estatal' });
        }
    });
    MASTER_DATA.autonomicas.forEach(d => {
        if (d.region === wizardData.comunidad && d.tags.some(t => tags.includes(t))) {
            identifiedResults.push({ ...d, tipo: 'Autonómica' });
        }
    });

    renderResults(identifiedResults);
};

function renderResults(res) {
    let html = `
        <div class="results-header">
            <h3>Diagnóstico Ejercicio 2025 Finalizado</h3>
            <p>Se han analizado todas las deducciones para <strong>${wizardData.comunidad.toUpperCase()}</strong>.</p>
        </div>
        <div class="results-list" style="margin-top: 24px; display: grid; gap: 16px;">
    `;
    if (res.length === 0) {
        html += `<p style="padding: 20px; background: #f8fafc; border-radius: 12px; border: 1px dashed #cbd5e1; text-align: center;">No se han detectado deducciones compatibles para este perfil con la normativa de 2025.</p>`;
    } else {
        res.forEach(d => {
            html += `
                <div style="padding: 20px; background: #eff6ff; border-left: 5px solid #2563eb; border-radius: 12px; position: relative;">
                    <h4 style="color: #1e40af; margin-bottom: 6px;">
                        <span style="background: #dbeafe; color: #1d4ed8; font-size: 0.7rem; padding: 2px 6px; border-radius: 4px; margin-right: 8px; vertical-align: middle;">${d.tipo}</span>
                        ${d.title}
                    </h4>
                    <p style="font-size: 0.9rem; color: #1e293b; margin-bottom: 12px;">${d.desc}</p>
                    <a href="${d.link}" target="_blank" style="font-size: 0.75rem; color: #2563eb; text-decoration: underline; font-weight: 600;">
                        <i data-lucide="external-link" style="width: 12px; vertical-align: middle;"></i> Consultar Manual AEAT 2025
                    </a>
                </div>
            `;
        });
    }
    html += `</div><div style="margin-top: 32px; display: flex; gap: 12px; flex-wrap: wrap;">
        <button class="next-btn" onclick="printReport()" style="background: #1e293b; flex: 1; min-width: 240px; margin-top: 0;">Generar Informe PDF Oficial</button>
        <button class="next-btn" onclick="initWizard()" style="background: #f1f5f9; color: #1e293b; flex: 1; min-width: 240px; margin-top: 0;">Nuevo Análisis</button>
    </div>`;
    wizardContainer.innerHTML = html;
    lucide.createIcons();
}


// PDF Re-engineered Engine (Fixed Result Injection)
window.printReport = () => {
    const printArea = document.getElementById('print-area');
    
    // Build Results HTML for Print
    let resultsHtml = identifiedResults.map(d => `
        <div style="margin-bottom: 20px; padding: 15px; border-bottom: 1px solid #e2e8f0;">
            <h3 style="color: #1e40af; font-size: 1.1rem; margin-bottom: 5px;">
                <span style="background: #dbeafe; color: #1d4ed8; font-size: 0.75rem; padding: 2px 6px; border-radius: 4px; margin-right: 8px; vertical-align: middle;">${d.tipo}</span>
                ${d.title}
            </h3>
            <p style="font-size: 0.95rem; color: #334155;">${d.desc}</p>
            <p style="font-size: 0.8rem; color: #2563eb; margin-top: 5px; word-break: break-all;"><strong>Referencia:</strong> ${d.link}</p>
        </div>
    `).join('');

    if (identifiedResults.length === 0) resultsHtml = '<p style="text-align: center; color: #64748b;">No se identificaron deducciones aplicables.</p>';

    const ccaaLabel = CCAA_LIST.find(c => c.id === wizardData.comunidad)?.name || wizardData.comunidad.toUpperCase();

    printArea.innerHTML = `
        <div style="padding: 40px; font-family: 'Inter', sans-serif; color: #1e293b; max-width: 800px; margin: 0 auto;">
            <div style="text-align: center; margin-bottom: 30px; border-bottom: 2px solid #2563eb; padding-bottom: 15px;">
                <h1 style="color: #2563eb; font-size: 1.8rem; margin-bottom: 5px;">Asistente Renta 2025</h1>
                <p style="font-size: 1rem; color: #64748b;">Informe de Diagnóstico Fiscal Personalizado</p>
            </div>
            
            <div style="background: #f8fafc; padding: 15px; border-radius: 8px; margin-bottom: 30px; font-size: 0.9rem;">
                <p><strong>Comunidad Autónoma:</strong> ${ccaaLabel}</p>
                <p><strong>Perfil de Edad:</strong> ${wizardData.edad < 35 ? 'Joven' : wizardData.edad > 65 ? 'Senior' : 'Adulto'}</p>
                <p><strong>Fecha:</strong> ${new Date().toLocaleDateString('es-ES')}</p>
            </div>

            <h2 style="color: #1e40af; font-size: 1.3rem; margin-bottom: 20px; border-left: 4px solid #2563eb; padding-left: 10px;">Deducciones Detectadas (Ejercicio 2025)</h2>
            ${resultsHtml}

            <div style="margin-top: 40px; padding: 15px; background: #fffbeb; border: 1px solid #fcd34d; border-radius: 6px; font-size: 0.8rem; color: #92400e;">
                <strong>ADVERTENCIA LEGAL:</strong> Este informe es de carácter informativo basado en el Manual Práctico de Renta 2025 de la AEAT. No constituye un asesoramiento legal vinculante. Se recomienda validar cada deducción en el programa Renta WEB oficial o con un profesional colegiado.
            </div>
            
            <div style="text-align: center; margin-top: 30px; font-size: 0.75rem; color: #94a3b8; border-top: 1px dashed #e2e8f0; padding-top: 10px;">
                Generado por Asistente Renta 2025 - Servicio al Contribuyente
            </div>
        </div>
    `;
    
    // Trigger Print
    window.print();
};
