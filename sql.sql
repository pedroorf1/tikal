--
-- PostgreSQL database cluster dump
--

-- Started on 2022-05-11 01:14:27

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Roles
--

CREATE ROLE postgres;
ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'md5a3556571e93b0d20722ba62be61e8c2d';






--
-- Databases
--

--
-- Database "template1" dump
--

\connect template1

--
-- PostgreSQL database dump
--

-- Dumped from database version 13.6 (Debian 13.6-1.pgdg110+1)
-- Dumped by pg_dump version 14.2

-- Started on 2022-05-11 01:14:27

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

-- Completed on 2022-05-11 01:14:28

--
-- PostgreSQL database dump complete
--

--
-- Database "notas" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 13.6 (Debian 13.6-1.pgdg110+1)
-- Dumped by pg_dump version 14.2

-- Started on 2022-05-11 01:14:28

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3006 (class 1262 OID 16384)
-- Name: notas; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE notas WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE notas OWNER TO postgres;

\connect notas

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 201 (class 1259 OID 16390)
-- Name: alunos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.alunos (
    id integer NOT NULL,
    nome character(255) NOT NULL
);


ALTER TABLE public.alunos OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 16388)
-- Name: alunos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.alunos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.alunos_id_seq OWNER TO postgres;

--
-- TOC entry 3007 (class 0 OID 0)
-- Dependencies: 200
-- Name: alunos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.alunos_id_seq OWNED BY public.alunos.id;


--
-- TOC entry 203 (class 1259 OID 16405)
-- Name: notas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.notas (
    id integer NOT NULL,
    idaluno bigint,
    nota1 numeric(3,1),
    nota2 numeric(3,1),
    nota3 numeric(3,1),
    nota4 numeric(3,1),
    media numeric(3,1) GENERATED ALWAYS AS (((((nota1 + nota2) + nota3) + nota4) / (4)::numeric)) STORED
);


ALTER TABLE public.notas OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 16403)
-- Name: notas_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.notas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.notas_id_seq OWNER TO postgres;

--
-- TOC entry 3008 (class 0 OID 0)
-- Dependencies: 202
-- Name: notas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.notas_id_seq OWNED BY public.notas.id;


--
-- TOC entry 2859 (class 2604 OID 16393)
-- Name: alunos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.alunos ALTER COLUMN id SET DEFAULT nextval('public.alunos_id_seq'::regclass);


--
-- TOC entry 2860 (class 2604 OID 16408)
-- Name: notas id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.notas ALTER COLUMN id SET DEFAULT nextval('public.notas_id_seq'::regclass);


--
-- TOC entry 2998 (class 0 OID 16390)
-- Dependencies: 201
-- Data for Name: alunos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.alunos (id, nome) FROM stdin;
1	Carlos Andre                                                                                                                                                                                                                                                   
2	Valéria Costa                                                                                                                                                                                                                                                  
3	Thiago Andrade                                                                                                                                                                                                                                                 
4	Andréia Sousa                                                                                                                                                                                                                                                  
5	Lorena Ribeiro                                                                                                                                                                                                                                                 
6	William Santos                                                                                                                                                                                                                                                 
7	Fernando Ribeiro                                                                                                                                                                                                                                               
8	Marcos Sousa                                                                                                                                                                                                                                                   
9	Lucas Ribeiro                                                                                                                                                                                                                                                  
128	Raimundo fernando                                                                                                                                                                                                                                              
\.


--
-- TOC entry 3000 (class 0 OID 16405)
-- Dependencies: 203
-- Data for Name: notas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.notas (id, idaluno, nota1, nota2, nota3, nota4) FROM stdin;
1	1	5.9	5.5	5.5	5.5
3	3	5.9	5.5	5.5	5.5
4	4	5.9	5.5	5.5	5.5
5	5	5.9	5.5	5.5	5.5
6	6	5.9	5.5	5.5	5.5
7	7	5.9	5.5	5.5	5.5
8	8	5.9	5.5	5.5	5.5
9	9	5.9	5.5	5.5	5.5
2	2	5.9	5.5	7.0	8.0
\.


--
-- TOC entry 3009 (class 0 OID 0)
-- Dependencies: 200
-- Name: alunos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.alunos_id_seq', 128, true);


--
-- TOC entry 3010 (class 0 OID 0)
-- Dependencies: 202
-- Name: notas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.notas_id_seq', 21, true);


--
-- TOC entry 2863 (class 2606 OID 16398)
-- Name: alunos alunos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.alunos
    ADD CONSTRAINT alunos_pkey PRIMARY KEY (id);


--
-- TOC entry 2865 (class 2606 OID 16410)
-- Name: notas notas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.notas
    ADD CONSTRAINT notas_pkey PRIMARY KEY (id);


--
-- TOC entry 2866 (class 2606 OID 16411)
-- Name: notas notas_idaluno_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.notas
    ADD CONSTRAINT notas_idaluno_fkey FOREIGN KEY (idaluno) REFERENCES public.alunos(id);


-- Completed on 2022-05-11 01:14:28

--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

\connect postgres

--
-- PostgreSQL database dump
--

-- Dumped from database version 13.6 (Debian 13.6-1.pgdg110+1)
-- Dumped by pg_dump version 14.2

-- Started on 2022-05-11 01:14:28

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

-- Completed on 2022-05-11 01:14:28

--
-- PostgreSQL database dump complete
--

-- Completed on 2022-05-11 01:14:28

--
-- PostgreSQL database cluster dump complete
--

