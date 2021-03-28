--
-- PostgreSQL database dump
--

-- Dumped from database version 12.4
-- Dumped by pg_dump version 12.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'LATIN9';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: reviews; Type: TABLE; Schema: public; Owner: davidtrussler
--

CREATE TABLE public.reviews (
    id smallint NOT NULL,
    medium character varying(15),
    title character varying(80),
    author character varying(30),
    publisher character varying(30),
    date_publication date,
    director character varying(30),
    actors character varying(100),
    running_time integer,
    country character varying(30),
    date_release date,
    venue character varying(30),
    date_opening date,
    date_closing date,
    writer character varying(30),
    date_event date,
    artist character varying(30),
    label character varying(30),
    text text,
    "timestamp" timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.reviews OWNER TO davidtrussler;

--
-- Name: reviews_id_seq; Type: SEQUENCE; Schema: public; Owner: davidtrussler
--

CREATE SEQUENCE public.reviews_id_seq
    AS smallint
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.reviews_id_seq OWNER TO davidtrussler;

--
-- Name: reviews_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: davidtrussler
--

ALTER SEQUENCE public.reviews_id_seq OWNED BY public.reviews.id;


--
-- Name: reviews id; Type: DEFAULT; Schema: public; Owner: davidtrussler
--

ALTER TABLE ONLY public.reviews ALTER COLUMN id SET DEFAULT nextval('public.reviews_id_seq'::regclass);


--
-- Data for Name: reviews; Type: TABLE DATA; Schema: public; Owner: davidtrussler
--

COPY public.reviews (id, medium, title, author, publisher, date_publication, director, actors, running_time, country, date_release, venue, date_opening, date_closing, writer, date_event, artist, label, text, "timestamp") FROM stdin;
1	book	Transit	Rachel Cusk	Jonathan Cape	2016-01-01	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	Second part of trilogy that begins with Outline	2021-01-01 09:56:05.966272
2	theatre	Death of England	\N	\N	\N	Clint Dyer	Rafe Spall	\N	\N	\N	National Theatre	2020-01-31	2020-03-07	Clint Dyer, Roy Williams	\N	\N	\N	A family in mourning. A man in crisis.	2021-01-01 09:56:16.865073
3	cinema	The Loneliness of the Long Distance Runner	\N	\N	\N	Tony Richardson	Michael Redgrave, Tom Courtenay, Avis Bunnage, Alec McCowen	100	UK	1962-01-01	\N	\N	\N	\N	\N	\N	\N	The much-loved Tom Courtenay made his name in this iconic film, the scalding story of teenager Colin Smith, who is sent to a rural borstal for burglary but marked out by his talent as a cross-country runner.	2021-01-01 09:56:27.320802
4	art_visual	Anselm Kiefer	\N	\N	\N	\N	\N	\N	\N	\N	White Cube Bermondsey	2019-11-15	2020-01-26	\N	\N	\N	\N	White Cube is pleased to present an exhibition of new work by Anselm Kiefer.	2021-01-01 09:56:38.082517
5	music_performed	John Tilbury / Bertrand Gauguet	\N	\N	\N	\N	\N	\N	\N	\N	Cafe Oto	\N	\N	\N	2019-09-18	\N	\N	John Tilbury and Bertrand Gauguet improvise a music of slowness, sometimes silent, sometimes tempestuous. Playing with the acoustic qualities of the place, are woven between the piano and the saxophone subtle games of harmonic textures, appearances of differential sounds, resonances and sometimes some more noisy sequences. A music to stretch the listening like a bow.	2021-01-01 09:56:46.776055
6	music_recorded	A Glorious Monster	\N	\N	\N	\N	\N	\N	\N	2018-01-01	\N	\N	\N	\N	\N	Sloth Racket	Luminous	With this fourth album in two years, Cath Roberts Sloth Racket consolidate what has by now become a recognisable MO. Essentially, with Roberts compositions, its all about how the quintet find their way to the inevitable riff.	2021-01-01 09:56:58.277797
\.


--
-- Name: reviews_id_seq; Type: SEQUENCE SET; Schema: public; Owner: davidtrussler
--

SELECT pg_catalog.setval('public.reviews_id_seq', 6, true);


--
-- Name: reviews reviews_pkey; Type: CONSTRAINT; Schema: public; Owner: davidtrussler
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

