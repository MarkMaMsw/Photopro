from passlib.hash import pbkdf2_sha256 as sha256

def generate_hash(pw):
    return sha256.hash(pw)

def verigy_hash(pw,hash):
    return sha256.verify(pw,hash)