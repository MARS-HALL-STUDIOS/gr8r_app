import os
import sys
import hashlib
from PIL import Image
from datetime import datetime
from pyexifinfo import get_json

def calculate_hash(file_path):
    """Calculate the SHA256 hash of a file."""
    sha256_hash = hashlib.sha256()
    with open(file_path, "rb") as f:
        while True:
            data = f.read(65536)  # Read in 64K chunks
            if not data:
                break
            sha256_hash.update(data)
    return sha256_hash.hexdigest()

def get_metadata(file_path):
    """Retrieve metadata and attributes of an image or video file."""
    try:
        metadata = get_json(file_path)
    except Exception as e:
        metadata = {}
    return metadata

def process_file(file_path):
    """Process a file, calculate hash, retrieve metadata, and return results."""
    file_info = {}
    file_info["hash"] = calculate_hash(file_path)
    file_info["metadata"] = get_metadata(file_path)
    file_info["file_size"] = os.path.getsize(file_path)
    file_info["date_created"] = datetime.fromtimestamp(os.path.getctime(file_path)).isoformat()
    return file_info

def main(file_path):
    """Main function to handle file processing."""
    try:
        # Process the file and get file information
        file_info = process_file(file_path)

        print(file_info)  # Print file information for testing

    except Exception as e:
        print(f"Error: {str(e)}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python script_name.py <file_path>")
        sys.exit(1)

    file_path = sys.argv[1]
    main(file_path)
