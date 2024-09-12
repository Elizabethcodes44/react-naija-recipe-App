import React, { useState, useEffect } from 'react';

const AdminPanel = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch('/get-role-change-requests', {
          credentials: 'include',
        });
        const data = await response.json();
        setRequests(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchRequests();
  }, []);

  const handleApprove = async (userId) => {
    try {
      const response = await fetch('/approve-role-change', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
        credentials: 'include',
      });

      if (response.ok) {
        alert('Role change approved successfully');
        setRequests(requests.filter(request => request.id !== userId));
      } else {
        alert('Error approving role change');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Role Change Requests</h1>
      <ul>
        {requests.map(request => (
          <li key={request.id}>
            {request.name} - {request.email}
            <button onClick={() => handleApprove(request.id)}>Approve</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
