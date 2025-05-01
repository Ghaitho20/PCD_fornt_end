import React, { useState, useEffect } from 'react';
import { FaTrash, FaUpload } from 'react-icons/fa';
import axios from 'axios';
import '../../../assets/css/Stats/editStatsPage/DiseaseEditor.css';
import { getToken } from '../../Security&Auth/authUtils';

const API_BASE = "http://localhost:8080/germs";

const GermEditor = () => {
  const [germs, setGerms] = useState([]);

  // Fetch germs on mount
  useEffect(() => {
    fetchGerms();
  }, []);

  const fetchGerms = async () => {
    const token = getToken();
    try {
      const response = await axios.get(API_BASE, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
          "Content-Type": "application/json",
        },
      });
      setGerms(response.data);
    } catch (error) {
      console.error("Error fetching germs:", error);
    }
  };

  const updateGermField = async (id, field, value) => {
    if (!id) return;

    const token = getToken();
    try {
      const response = await axios.put(
        `${API_BASE}/update/${id}/${field}`,
        value,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : "",
          },
        }
      );

      if (response.status === 200) {
        setGerms(prev =>
          prev.map(germ =>
            germ.id === id ? { ...germ, [field]: value } : germ
          )
        );
      }
    } catch (error) {
      console.error("Update error:", error.message);
      alert("Error updating germ: " + error.message);
    }
  };

  const handleImageUpload = async (germId, e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    const token = getToken();
    try {
      const response = await fetch(`${API_BASE}/update/image/${germId}`, {
        method: "PUT",
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: formData,
      });

      if (response.ok) {
        alert("Image uploaded successfully!");
        fetchGerms(); // refresh data
      } else {
        alert("Image upload failed.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const deleteGerm = async (id) => {
    const token = getToken();
    try {
      const response = await fetch(`${API_BASE}/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("Failed to delete germ");

      setGerms(prev => prev.filter(germ => germ.id !== id));
    } catch (error) {
      console.error("Delete error:", error);
      alert("Something went wrong while deleting.");
    }
  };

  const addGerm = async () => {
    const token = getToken();
    const newGerm = {
      name: "",
      description: "",
      image: null,
    };

    try {
      const response = await axios.post(`${API_BASE}/add`, newGerm, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
      });

      if (response.status === 200 && response.data) {
        setGerms(prev => [...prev, response.data]);
      } else {
        throw new Error("Failed to add germ");
      }
    } catch (error) {
      console.error("Add germ error:", error.message);
      alert("Error adding new germ: " + error.message);
    }
  };

  return (
    <div className="disease-editor">
      <h1 className="mt-[250px]">Edit Germs</h1>

      {germs.map((germ) => (
        <div key={germ.id} className="disease-container">
          <div className="image-section">
            <img
              src={germ.image ? `data:image/jpeg;base64,${germ.image}` : ''}
              alt={germ.name || 'Germ'}
            />
            <label className="upload-button">
              <FaUpload /> Upload New
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(germ.id, e)}
                style={{ display: 'none' }}
              />
            </label>
          </div>

          <div className="input-section">
            <input
              type="text"
              value={germ.name || ''}
              onChange={(e) => updateGermField(germ.id, 'name', e.target.value)}
              placeholder="Germ Name"
            />
            <textarea
              value={germ.description || ''}
              onChange={(e) => updateGermField(germ.id, 'description', e.target.value)}
              placeholder="Germ Description"
            />
          </div>

          <button className="delete-button" onClick={() => deleteGerm(germ.id)}>
            <FaTrash />
          </button>
        </div>
      ))}

       
        <div className="update-section">
          
          <button onClick={addGerm} className="add-button">
            Add new Germ
          </button>
        </div>
      
      
    </div>
  );
};

export default GermEditor;
