CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
  id UUID UNIQUE PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
  email VARCHAR,
  password VARCHAR,
  datacriacao TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS

CREATE TABLE professionaltypes (
  id UUID UNIQUE PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
  descricao VARCHAR NOT NULL,
  situacao BOOLEAN NOT NULL,
  updatedat TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  createdat TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE professionaltypes ALTER COLUMN updatedat TIMESTAMPTZ NOT NULL DEFAULT NOW(),

CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updatedAt = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON professionaltypes
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();








CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updatedat = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;


CREATE TABLE professionaltypes (
  id UUID UNIQUE PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
  descricao VARCHAR NOT NULL,
  situacao BOOLEAN NOT NULL,
  updatedat TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  createdat TIMESTAMPTZ NOT NULL DEFAULT NOW()
);


CREATE TABLE professional (
  id UUID UNIQUE PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
  nome VARCHAR NOT NULL,
  telefone VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  tipoprofissional UUID,
  situacao BOOLEAN NOT NULL,
  updatedAt TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  createdAt TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON professionaltypes
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON professional
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();