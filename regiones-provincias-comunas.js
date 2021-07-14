/*
    Creado por Maximiliano Ibáñez M.
*/

regiones = [
    {id_region:1,nombre:"Región de Arica y Parinacota"},
    {id_region:2,nombre:"Región de Tarapacá"},
    {id_region:3,nombre:"Región de Antofagasta"},
    {id_region:4,nombre:"Región de Atacama"},
    {id_region:5,nombre:"Región de Coquimbo"},
    {id_region:6,nombre:"Región de Valparaíso"},
    {id_region:7,nombre:"Región del Libertador General Bernardo O'Higgins"},
    {id_region:8,nombre:"Región del Maule"},
    {id_region:9,nombre:"Región de Ñuble"},
    {id_region:10,nombre:"Región del Biobío"},
    {id_region:11,nombre:"Región de La Araucanía"},
    {id_region:12,nombre:"Región de Los Ríos"},
    {id_region:13,nombre:"Región de Los Lagos"},
    {id_region:14,nombre:"Región de Aysén del G. Carlos Ibáñez del Campo"},
    {id_region:15,nombre:"Región de Magallanes y de la Antártica Chilena"},
    {id_region:16,nombre:"Región Metropolitana de Santiago"}
]

provincias = [
    {id_prov:20,nombre:"Arica",id_region:1},
    {id_prov:21,nombre:"Parinacota",id_region:1},
    {id_prov:22,nombre:"Iquique",id_region:2},
    {id_prov:23,nombre:"Tamarugal",id_region:2},
    {id_prov:24,nombre:"Antofagasta",id_region:3},
    {id_prov:25,nombre:"Tocopilla",id_region:3},
    {id_prov:26,nombre:"El Loa",id_region:3},
    {id_prov:27,nombre:"Copiapó",id_region:4},
    {id_prov:28,nombre:"Huasco",id_region:4},
    {id_prov:29,nombre:"Chañaral",id_region:4},
    {id_prov:30,nombre:"Choapa",id_region:5},
    {id_prov:31,nombre:"Elqui",id_region:5},
    {id_prov:32,nombre:"Limarí",id_region:5},
    {id_prov:33,nombre:"Isla de Pascua",id_region:6},
    {id_prov:34,nombre:"Los Andes",id_region:6},
    {id_prov:35,nombre:"Quillota",id_region:6},
    {id_prov:36,nombre:"Valparaíso",id_region:6},
    {id_prov:37,nombre:"Petorca",id_region:6},
    {id_prov:38,nombre:"San Antonio",id_region:6},
    {id_prov:39,nombre:"San Felipe de Aconcagua",id_region:6},
    {id_prov:40,nombre:"Marga Marga",id_region:6},
    {id_prov:41,nombre:"Cachapoal",id_region:7},
    {id_prov:42,nombre:"Cardenal Caro",id_region:7},
    {id_prov:43,nombre:"Colchagua",id_region:7},
    {id_prov:44,nombre:"Linares",id_region:8},
    {id_prov:45,nombre:"Curicó",id_region:8},
    {id_prov:46,nombre:"Cauquenes",id_region:8},
    {id_prov:47,nombre:"Talca",id_region:8},
    {id_prov:48,nombre:"Itata",id_region:9},
    {id_prov:49,nombre:"Punilla",id_region:9},
    {id_prov:50,nombre:"Concepción",id_region:10},
    {id_prov:51,nombre:"Arauco",id_region:10},
    {id_prov:52,nombre:"Bio-Bío",id_region:10},







]
comunas = [
    {id_comuna:101, nombre:"Arica", id_prov:20},
    {id_comuna:102, nombre:"Camarones", id_prov:20},
    //_____________________________________________
    {id_comuna:103, nombre:"Putre", id_prov:21},
    {id_comuna:104, nombre:"General Lagos", id_prov:21},
    //_____________________________________________
    {id_comuna:105, nombre:"Iquique", id_prov:22},
    {id_comuna:106, nombre:"Alto Hospicio", id_prov:22},
    //_____________________________________________
    {id_comuna:107, nombre:"Pozo Almonte", id_prov:23},
    {id_comuna:108, nombre:"Camiña", id_prov:23},
    {id_comuna:109, nombre:"Colchane", id_prov:23},
    {id_comuna:110, nombre:"Huara", id_prov:23},
    {id_comuna:111, nombre:"Pica", id_prov:23},
    //_____________________________________________
    {id_comuna:112, nombre:"Antofagasta", id_prov:24},
    {id_comuna:113, nombre:"Mejillones", id_prov:24},
    {id_comuna:114, nombre:"Sierra Gorda", id_prov:24},
    {id_comuna:115, nombre:"Taltal", id_prov:24},
    //_____________________________________________
    {id_comuna:116, nombre:"Tocopilla", id_prov:25},
    {id_comuna:117, nombre:"María Elena", id_prov:25},
    //_____________________________________________
    {id_comuna:118, nombre:"Calama", id_prov:26},
    {id_comuna:119, nombre:"Ollagüe", id_prov:26},
    {id_comuna:120, nombre:"San Pedro de Atacama", id_prov:26},
    //______________________________________________
    {id_comuna:121, nombre:"Copiapó", id_prov:27},
    {id_comuna:122, nombre:"Caldera", id_prov:27},
    {id_comuna:123, nombre:"Tierra Amarilla", id_prov:27},
    //______________________________________________
    {id_comuna:124, nombre:"Vallenar", id_prov:28},
    {id_comuna:125, nombre:"Alto del Carmen", id_prov:28},
    {id_comuna:126, nombre:"Freirina", id_prov:28},
    {id_comuna:127, nombre:"Huasco", id_prov:28},
    //______________________________________________
    {id_comuna:128, nombre:"Chañaral", id_prov:29},
    {id_comuna:129, nombre:"Diego de Almagro", id_prov:29},
    //______________________________________________
    {id_comuna:130, nombre:"Illapel", id_prov:30},
    {id_comuna:131, nombre:"Canela", id_prov:30},
    {id_comuna:132, nombre:"Los Vilos", id_prov:30},
    {id_comuna:133, nombre:"Salamanca", id_prov:30},
    //__________________________________________________
    {id_comuna:134, nombre:"La Serena", id_prov:31},
    {id_comuna:135, nombre:"Coquimbo", id_prov:31},
    {id_comuna:136, nombre:"Andacollo", id_prov:31},
    {id_comuna:137, nombre:"La Higuera", id_prov:31},
    {id_comuna:138, nombre:"Paihuano", id_prov:31},
    {id_comuna:139, nombre:"Vicuña", id_prov:31},
    //__________________________________________________
    {id_comuna:140, nombre:"Ovalle", id_prov:32},
    {id_comuna:141, nombre:"Combarbalá", id_prov:32},
    {id_comuna:142, nombre:"Monte Patria", id_prov:32},
    {id_comuna:143, nombre:"Punitaqui", id_prov:32},
    {id_comuna:144, nombre:"Río Hurtado", id_prov:32},
    //__________________________________________________
    {id_comuna:145, nombre:"Isla de Pascua", id_prov:33},
    //__________________________________________________
    {id_comuna:146, nombre:"Los Andes", id_prov:34},
    {id_comuna:147, nombre:"Calle Larga", id_prov:34},
    {id_comuna:148, nombre:"Rinconada", id_prov:34},
    {id_comuna:149, nombre:"San Esteban", id_prov:34},
    //__________________________________________________
    {id_comuna:150, nombre:"Quillota", id_prov:35},
    {id_comuna:151, nombre:"La Calera", id_prov:35},
    {id_comuna:152, nombre:"Hijuelas", id_prov:35},
    {id_comuna:153, nombre:"La Cruz", id_prov:35},
    {id_comuna:154, nombre:"Nogales", id_prov:35},
    //_________________________________________________
    {id_comuna:155, nombre:"Valparaíso", id_prov:36},
    {id_comuna:156, nombre:"Casablanca", id_prov:36},
    {id_comuna:157, nombre:"Concón", id_prov:36},
    {id_comuna:158, nombre:"Juan Fernandez", id_prov:36},
    {id_comuna:159, nombre:"Puchuncaví", id_prov:36},
    {id_comuna:160, nombre:"Quintero", id_prov:36},
    {id_comuna:161, nombre:"Viña del Mar", id_prov:36},
    //__________________________________________________
    {id_comuna:162, nombre:"La Ligua", id_prov:37},
    {id_comuna:163, nombre:"Cabildo", id_prov:37},
    {id_comuna:164, nombre:"Papudo", id_prov:37},
    {id_comuna:165, nombre:"Petorca", id_prov:37},
    {id_comuna:166, nombre:"Zapallar", id_prov:37},
    //_________________________________________________
    {id_comuna:167, nombre:"San Antonio", id_prov:38},
    {id_comuna:168, nombre:"Algarrobo", id_prov:38},
    {id_comuna:169, nombre:"Cartagena", id_prov:38},
    {id_comuna:170, nombre:"El Quisco", id_prov:38},
    {id_comuna:171, nombre:"El Tabo", id_prov:38},
    {id_comuna:172, nombre:"Santo Domingo", id_prov:38},
    //_____________________________________________________
    {id_comuna:173, nombre:"San Felipe", id_prov:39},
    {id_comuna:174, nombre:"Catemu", id_prov:39},
    {id_comuna:175, nombre:"Llaillay", id_prov:39},
    {id_comuna:176, nombre:"Panquehue", id_prov:39},
    {id_comuna:177, nombre:"Putaendo", id_prov:39},
    {id_comuna:178, nombre:"Santa María", id_prov:39},
    //_________________________________________________
    {id_comuna:179, nombre:"Quilpué", id_prov:40},
    {id_comuna:180, nombre:"Limache", id_prov:40},
    {id_comuna:181, nombre:"Olmué", id_prov:40},
    {id_comuna:182, nombre:"Villa Alemana", id_prov:40},
    //_________________________________________________
    {id_comuna:183, nombre: 'Rancagua', id_prov:41},
    {id_comuna:184, nombre: 'Codegua', id_prov:41},
    {id_comuna:185, nombre: 'Coinco', id_prov:41},
    {id_comuna:186, nombre: 'Coltauco', id_prov:41},
    {id_comuna:187, nombre: 'Doñihue', id_prov:41},
    {id_comuna:188, nombre: 'Graneros', id_prov:41},
    {id_comuna:189, nombre: 'Las Cabras', id_prov:41},
    {id_comuna:190, nombre: 'Machalí', id_prov:41},
    {id_comuna:191, nombre: 'Malloa', id_prov:41},
    {id_comuna:192, nombre: 'Mostazal', id_prov:41},
    {id_comuna:193, nombre: 'Olivar', id_prov:41},
    {id_comuna:194, nombre: 'Peumo', id_prov:41},
    {id_comuna:195, nombre: 'Pichidegua', id_prov:41},
    {id_comuna:196, nombre: 'Quinta de Tilcoco', id_prov:41},
    {id_comuna:197, nombre: 'Rengo', id_prov:41},
    {id_comuna:198, nombre: 'Requínoa', id_prov:41},
    {id_comuna:199, nombre: 'San Vicente', id_prov:41},
    //_________________________________________________
    {id_comuna:200, nombre: 'Navidad', id_prov:42},
    {id_comuna:201, nombre: 'Paredones', id_prov:42},
    {id_comuna:202, nombre: 'Pichilemu', id_prov:42},
    {id_comuna:203, nombre: 'La Estrella', id_prov:42},
    {id_comuna:204, nombre: 'Litueche', id_prov:42},
    {id_comuna:205, nombre: 'Marchihue', id_prov:42},

    //_________________________________________________
    {id_comuna:206, nombre: 'San Fernando', id_prov:43},
    {id_comuna:207, nombre: 'Chépica', id_prov:43},
    {id_comuna:208, nombre: 'Chimbarongo', id_prov:43},
    {id_comuna:209, nombre: 'Lolol', id_prov:43},
    {id_comuna:210, nombre: 'Nancagua', id_prov:43},
    {id_comuna:211, nombre: 'Palmilla', id_prov:43},
    {id_comuna:212, nombre: 'Peralillo', id_prov:43},
    {id_comuna:213, nombre: 'Placilla', id_prov:43},
    {id_comuna:214, nombre: 'Pumanque', id_prov:43},
    {id_comuna:215, nombre: 'Santa Cruz', id_prov:43},
    //________________________________________________
    {id_comuna:216, nombre: 'Parral', id_prov:44},
    {id_comuna:217, nombre: 'Linares', id_prov:44},
    {id_comuna:218, nombre: 'Colbún', id_prov:44},
    {id_comuna:219, nombre: 'Longaví', id_prov:44},
    {id_comuna:220, nombre: 'Retiro', id_prov:44},
    {id_comuna:221, nombre: 'San Javier', id_prov:44},
    {id_comuna:222, nombre: 'Villa Alegre', id_prov:44},
    {id_comuna:223, nombre: 'Yerbas Buenas', id_prov:44},

    //_________________________________________________
    {id_comuna:224, nombre: 'Curicó', id_prov:45},
    {id_comuna:225, nombre: 'Hualañé', id_prov:45},
    {id_comuna:218, nombre: 'Licantén', id_prov:45},
    {id_comuna:219, nombre: 'Molina', id_prov:45},
    {id_comuna:220, nombre: 'Rauco', id_prov:45},
    {id_comuna:221, nombre: 'Romeral', id_prov:45},
    {id_comuna:222, nombre: 'Sagrada Familia', id_prov:45},
    {id_comuna:223, nombre: 'Teno', id_prov:45},
    {id_comuna:224, nombre: 'Vichuquén', id_prov:45},
    //___________________________________________________
    {id_comuna:225, nombre: 'Cauquenes', id_prov:46},
    {id_comuna:226, nombre: 'Chanco', id_prov:46},
    {id_comuna:227, nombre: 'Pelluhue', id_prov:46},
    //__________________________________________________
    {id_comuna:228, nombre: 'Talca', id_prov:47},
    {id_comuna:229, nombre: 'Constitución', id_prov:47},
    {id_comuna:230, nombre: 'Curepto', id_prov:47},
    {id_comuna:231, nombre: 'Empedrado', id_prov:47},
    {id_comuna:232, nombre: 'Maule', id_prov:47},
    {id_comuna:233, nombre: 'Pelarco', id_prov:47},
    {id_comuna:234, nombre: 'Pencahue', id_prov:47},
    {id_comuna:235, nombre: 'Río Claro', id_prov:47},
    {id_comuna:236, nombre: 'San Clemente', id_prov:47},
    {id_comuna:237, nombre: 'San Rafael', id_prov:47},
    //_________________________________________________
    {id_comuna:238, nombre: 'Quirihue', id_prov:48},
    {id_comuna:239, nombre: 'Cobquecura', id_prov:48},
    {id_comuna:240, nombre: 'Coelemu', id_prov:48},
    {id_comuna:241, nombre: 'Ninhue', id_prov:48},
    {id_comuna:242, nombre: 'Portezuelo', id_prov:48},
    {id_comuna:243, nombre: 'Ránquil', id_prov:48},
    {id_comuna:244, nombre: 'Treguaco', id_prov:48},
    //_________________________________________________
    {id_comuna:245, nombre: 'San Carlos', id_prov:49},
    {id_comuna:246, nombre: 'Coihueco', id_prov:49},
    {id_comuna:247, nombre: 'Ñiquén', id_prov:49},
    {id_comuna:248, nombre: 'San Fabián', id_prov:49},
    {id_comuna:249, nombre: 'San Nicolás', id_prov:49},
    //_________________________________________________
    {id_comuna:250, nombre: 'Concepción', id_prov:50},
    {id_comuna:251, nombre: 'Coronel', id_prov:50},
    {id_comuna:252, nombre: 'Chiguayante', id_prov:50},
    {id_comuna:253, nombre: 'Florida', id_prov:50},
    {id_comuna:254, nombre: 'Hualqui', id_prov:50},
    {id_comuna:255, nombre: 'Lota', id_prov:50},
    {id_comuna:256, nombre: 'Penco', id_prov:50},
    {id_comuna:257, nombre: 'San Pedro de la Paz', id_prov:50},
    {id_comuna:258, nombre: 'Santa Juana', id_prov:50},
    {id_comuna:259, nombre: 'Talcahuano', id_prov:50},
    {id_comuna:260, nombre: 'Tomé', id_prov:50},
    {id_comuna:261, nombre: 'Hualpén', id_prov:50},
    //_______________________________________________
    {id_comuna:262, nombre: 'Lebu', id_prov:51},
    {id_comuna:263, nombre: 'Arauco', id_prov:51},
    {id_comuna:264, nombre: 'Cañete', id_prov:51},
    {id_comuna:265, nombre: 'Contulmo', id_prov:51},
    {id_comuna:266, nombre: 'Curanilahue', id_prov:51},
    {id_comuna:267, nombre: 'Los Alamos', id_prov:51},
    {id_comuna:268, nombre: 'Tirúa', id_prov:51},
    //____________________________________________________
    {id_comuna:269, nombre: 'Los Angeles', id_prov:52},
    {id_comuna:270, nombre: 'Antuco', id_prov:52},
    {id_comuna:271, nombre: 'Cabrero', id_prov:52},
    {id_comuna:272, nombre: 'Laja', id_prov:52},
    {id_comuna:273, nombre: 'Mulchén', id_prov:52},
    {id_comuna:274, nombre: 'Nacimiento', id_prov:52},
    {id_comuna:275, nombre: 'Negrete', id_prov:52},
    {id_comuna:276, nombre: 'Quilaco', id_prov:52},
    {id_comuna:277, nombre: 'Quilleco', id_prov:52},
    {id_comuna:278, nombre: 'San Rosendo', id_prov:52},
    {id_comuna:279, nombre: 'Santa Bárbara', id_prov:52},
    {id_comuna:280, nombre: 'Tucapel', id_prov:52},
    {id_comuna:281, nombre: 'Yumbel', id_prov:52},
    {id_comuna:282, nombre: 'Alto Biobío', id_prov:52},







]