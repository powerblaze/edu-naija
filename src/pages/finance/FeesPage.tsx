import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { 
  Plus, 
  Download, 
  Search, 
  DollarSign, 
  CreditCard, 
  CheckCircle, 
  AlertCircle, 
  XCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { format } from 'date-fns';

const FeesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTerm, setSelectedTerm] = useState('current');
  const [selectedPaymentStatus, setSelectedPaymentStatus] = useState('all');
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  
  // Sample fee structure
  const feeStructure = [
    { id: 'fee1', level: 'Primary', amount: 50000, category: 'Tuition' },
    { id: 'fee2', level: 'Primary', amount: 10000, category: 'Development Levy' },
    { id: 'fee3', level: 'Primary', amount: 5000, category: 'PTA Levy' },
    { id: 'fee4', level: 'Primary', amount: 15000, category: 'Books and Supplies' },
    { id: 'fee5', level: 'Junior Secondary', amount: 65000, category: 'Tuition' },
    { id: 'fee6', level: 'Junior Secondary', amount: 15000, category: 'Development Levy' },
    { id: 'fee7', level: 'Junior Secondary', amount: 7500, category: 'PTA Levy' },
    { id: 'fee8', level: 'Junior Secondary', amount: 20000, category: 'Books and Supplies' },
    { id: 'fee9', level: 'Senior Secondary', amount: 80000, category: 'Tuition' },
    { id: 'fee10', level: 'Senior Secondary', amount: 20000, category: 'Development Levy' },
    { id: 'fee11', level: 'Senior Secondary', amount: 10000, category: 'PTA Levy' },
    { id: 'fee12', level: 'Senior Secondary', amount: 25000, category: 'Books and Supplies' },
    { id: 'fee13', level: 'All', amount: 50000, category: 'Boarding Fee' },
    { id: 'fee14', level: 'All', amount: 15000, category: 'Uniform' },
    { id: 'fee15', level: 'All', amount: 5000, category: 'Sports Fee' },
  ];
  
  // Sample payments data
  const paymentsData = [
    {
      id: 'pay1',
      student: {
        id: 'STD001',
        name: 'Chinedu Okonkwo',
        class: 'JSS 2A',
        level: 'Junior Secondary',
        photo: 'https://randomuser.me/api/portraits/men/1.jpg'
      },
      feeAmount: 107500,
      amountPaid: 107500,
      balance: 0,
      status: 'completed',
      paymentDate: new Date('2024-09-05'),
      paymentMethod: 'Bank Transfer',
      receiptNumber: 'RCP-2024-001',
      term: 'First Term',
      academicYear: '2024/2025'
    },
    {
      id: 'pay2',
      student: {
        id: 'STD002',
        name: 'Amina Ibrahim',
        class: 'SSS 1B',
        level: 'Senior Secondary',
        photo: 'https://randomuser.me/api/portraits/women/2.jpg'
      },
      feeAmount: 135000,
      amountPaid: 100000,
      balance: 35000,
      status: 'partial',
      paymentDate: new Date('2024-09-10'),
      paymentMethod: 'Online Payment',
      receiptNumber: 'RCP-2024-002',
      term: 'First Term',
      academicYear: '2024/2025'
    },
    {
      id: 'pay3',
      student: {
        id: 'STD003',
        name: 'Emeka Eze',
        class: 'Primary 5',
        level: 'Primary',
        photo: 'https://randomuser.me/api/portraits/men/3.jpg'
      },
      feeAmount: 80000,
      amountPaid: 0,
      balance: 80000,
      status: 'pending',
      paymentDate: null,
      paymentMethod: null,
      receiptNumber: null,
      term: 'First Term',
      academicYear: '2024/2025'
    },
    {
      id: 'pay4',
      student: {
        id: 'STD004',
        name: 'Ngozi Adeyemi',
        class: 'SSS 3A',
        level: 'Senior Secondary',
        photo: 'https://randomuser.me/api/portraits/women/4.jpg'
      },
      feeAmount: 135000,
      amountPaid: 135000,
      balance: 0,
      status: 'completed',
      paymentDate: new Date('2024-09-01'),
      paymentMethod: 'Cash',
      receiptNumber: 'RCP-2024-003',
      term: 'First Term',
      academicYear: '2024/2025'
    },
    {
      id: 'pay5',
      student: {
        id: 'STD005',
        name: 'Yusuf Mohammed',
        class: 'JSS 1C',
        level: 'Junior Secondary',
        photo: 'https://randomuser.me/api/portraits/men/5.jpg'
      },
      feeAmount: 107500,
      amountPaid: 50000,
      balance: 57500,
      status: 'partial',
      paymentDate: new Date('2024-09-15'),
      paymentMethod: 'Bank Transfer',
      receiptNumber: 'RCP-2024-004',
      term: 'First Term',
      academicYear: '2024/2025'
    },
  ];
  
  // Filter payments based on search and filters
  const filteredPayments = paymentsData.filter(payment => {
    const matchesSearch = 
      payment.student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.student.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.student.class.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = 
      selectedPaymentStatus === 'all' || 
      payment.status === selectedPaymentStatus;
    
    return matchesSearch && matchesStatus;
  });
  
  const toggleRowExpand = (id: string) => {
    setExpandedRow(expandedRow === id ? null : id);
  };
  
  // Calculate total statistics
  const totalExpected = paymentsData.reduce((sum, payment) => sum + payment.feeAmount, 0);
  const totalCollected = paymentsData.reduce((sum, payment) => sum + payment.amountPaid, 0);
  const totalOutstanding = paymentsData.reduce((sum, payment) => sum + payment.balance, 0);
  const collectionRate = (totalCollected / totalExpected) * 100;
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-success-500" />;
      case 'partial':
        return <AlertCircle className="h-5 w-5 text-warning-500" />;
      case 'pending':
        return <XCircle className="h-5 w-5 text-error-500" />;
      default:
        return null;
    }
  };
  
  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Paid';
      case 'partial':
        return 'Partial';
      case 'pending':
        return 'Unpaid';
      default:
        return status;
    }
  };
  
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'partial':
        return 'bg-yellow-100 text-yellow-800';
      case 'pending':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-neutral-100 text-neutral-800';
    }
  };
  
  return (
    <Routes>
      <Route path="/" element={
        <div className="animate-fade-in">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-neutral-900">Fee Management</h1>
            <p className="text-neutral-500">
              Manage school fees, payments, and financial records
            </p>
          </div>

          {/* Fee collection summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white p-5 rounded-lg shadow-card">
              <div className="flex items-center">
                <div className="flex-shrink-0 p-3 rounded-full bg-primary-100">
                  <DollarSign className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-5">
                  <p className="text-sm font-medium text-neutral-500">Expected Fees</p>
                  <h3 className="text-lg font-semibold text-neutral-900">₦{totalExpected.toLocaleString()}</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-card">
              <div className="flex items-center">
                <div className="flex-shrink-0 p-3 rounded-full bg-green-100">
                  <CreditCard className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-5">
                  <p className="text-sm font-medium text-neutral-500">Collected</p>
                  <h3 className="text-lg font-semibold text-neutral-900">₦{totalCollected.toLocaleString()}</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-card">
              <div className="flex items-center">
                <div className="flex-shrink-0 p-3 rounded-full bg-red-100">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-5">
                  <p className="text-sm font-medium text-neutral-500">Outstanding</p>
                  <h3 className="text-lg font-semibold text-neutral-900">₦{totalOutstanding.toLocaleString()}</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-card">
              <div className="flex items-center">
                <div className="flex-shrink-0 p-3 rounded-full bg-blue-100">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-5">
                  <p className="text-sm font-medium text-neutral-500">Collection Rate</p>
                  <h3 className="text-lg font-semibold text-neutral-900">{collectionRate.toFixed(1)}%</h3>
                </div>
              </div>
              <div className="mt-3 w-full bg-neutral-200 rounded-full h-2">
                <div 
                  className={`${
                    collectionRate >= 70 
                      ? 'bg-green-500' 
                      : collectionRate >= 40 
                        ? 'bg-yellow-500' 
                        : 'bg-red-500'
                  } h-2 rounded-full`}
                  style={{ width: `${collectionRate}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Fee structure */}
          <div className="bg-white rounded-lg shadow-card mb-6 overflow-hidden">
            <div className="p-5 border-b border-neutral-200 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-lg font-semibold text-neutral-900">Fee Structure (2024/2025)</h2>
              <div className="mt-2 sm:mt-0 flex space-x-2">
                <button className="btn-primary flex items-center">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Fee Item
                </button>
                <button className="btn-outline flex items-center">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-neutral-200">
                <thead className="bg-neutral-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Level
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Amount (₦)
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-neutral-200">
                  {feeStructure.map((fee) => (
                    <tr key={fee.id} className="hover:bg-neutral-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-800">
                        {fee.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
                        {fee.level}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium text-neutral-800">
                        {fee.amount.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Payment Records */}
          <div className="bg-white rounded-lg shadow-card mb-6 overflow-hidden">
            <div className="p-5 border-b border-neutral-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <h2 className="text-lg font-semibold text-neutral-900">Payment Records</h2>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-neutral-400" />
                    </div>
                    <input
                      type="text"
                      className="pl-10 form-input"
                      placeholder="Search by student name or ID..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  
                  <div className="flex space-x-2">
                    <select
                      className="form-select"
                      value={selectedTerm}
                      onChange={(e) => setSelectedTerm(e.target.value)}
                    >
                      <option value="current">Current Term</option>
                      <option value="previous">Previous Term</option>
                      <option value="all">All Terms</option>
                    </select>
                    
                    <select
                      className="form-select"
                      value={selectedPaymentStatus}
                      onChange={(e) => setSelectedPaymentStatus(e.target.value)}
                    >
                      <option value="all">All Status</option>
                      <option value="completed">Paid</option>
                      <option value="partial">Partial</option>
                      <option value="pending">Unpaid</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <table className="min-w-full divide-y divide-neutral-200">
                <thead className="bg-neutral-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Student
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Total Fee (₦)
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Amount Paid (₦)
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Balance (₦)
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      <span className="sr-only">Details</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-neutral-200">
                  {filteredPayments.map((payment) => (
                    <React.Fragment key={payment.id}>
                      <tr className={`hover:bg-neutral-50 ${expandedRow === payment.id ? 'bg-neutral-50' : ''}`}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img className="h-10 w-10 rounded-full" src={payment.student.photo} alt="" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-neutral-900">
                                {payment.student.name}
                              </div>
                              <div className="text-sm text-neutral-500">
                                {payment.student.class}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">
                          {payment.feeAmount.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                          {payment.amountPaid.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                          {payment.balance.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {getStatusIcon(payment.status)}
                            <span className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(payment.status)}`}>
                              {getStatusText(payment.status)}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => toggleRowExpand(payment.id)}
                            className="text-primary-600 hover:text-primary-800 flex items-center"
                          >
                            <span>Details</span>
                            {expandedRow === payment.id ? (
                              <ChevronUp className="ml-1 h-4 w-4" />
                            ) : (
                              <ChevronDown className="ml-1 h-4 w-4" />
                            )}
                          </button>
                        </td>
                      </tr>
                      {expandedRow === payment.id && (
                        <tr className="bg-neutral-50">
                          <td colSpan={6} className="px-6 py-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                              <div>
                                <h4 className="text-xs font-semibold text-neutral-500 mb-1">Term/Session</h4>
                                <p className="text-sm text-neutral-800">{payment.term}, {payment.academicYear}</p>
                              </div>
                              <div>
                                <h4 className="text-xs font-semibold text-neutral-500 mb-1">Payment Method</h4>
                                <p className="text-sm text-neutral-800">{payment.paymentMethod || 'Not paid yet'}</p>
                              </div>
                              <div>
                                <h4 className="text-xs font-semibold text-neutral-500 mb-1">Receipt Number</h4>
                                <p className="text-sm text-neutral-800">{payment.receiptNumber || 'N/A'}</p>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div>
                                <h4 className="text-xs font-semibold text-neutral-500 mb-1">Payment Date</h4>
                                <p className="text-sm text-neutral-800">
                                  {payment.paymentDate ? format(payment.paymentDate, 'MMM d, yyyy') : 'Not paid yet'}
                                </p>
                              </div>
                              <div>
                                <h4 className="text-xs font-semibold text-neutral-500 mb-1">Student ID</h4>
                                <p className="text-sm text-neutral-800">{payment.student.id}</p>
                              </div>
                              <div className="flex justify-end">
                                <button className="btn-primary text-sm py-1">Record Payment</button>
                                <button className="btn-outline text-sm py-1 ml-2">View Receipt</button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
              {filteredPayments.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-neutral-500">No payment records match your search criteria.</p>
                </div>
              )}
            </div>
            
            {/* Pagination */}
            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-neutral-200 sm:px-6">
              <div className="flex-1 flex justify-between sm:hidden">
                <button className="relative inline-flex items-center px-4 py-2 border border-neutral-300 text-sm font-medium rounded-md text-neutral-700 bg-white hover:bg-neutral-50">
                  Previous
                </button>
                <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-neutral-300 text-sm font-medium rounded-md text-neutral-700 bg-white hover:bg-neutral-50">
                  Next
                </button>
              </div>
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-neutral-700">
                    Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredPayments.length}</span> of{' '}
                    <span className="font-medium">{filteredPayments.length}</span> results
                  </p>
                </div>
                <div>
                  <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-neutral-300 bg-white text-sm font-medium text-neutral-500 hover:bg-neutral-50">
                      <span className="sr-only">Previous</span>
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button className="relative inline-flex items-center px-4 py-2 border border-neutral-300 bg-primary-50 text-sm font-medium text-primary-600">
                      1
                    </button>
                    <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-neutral-300 bg-white text-sm font-medium text-neutral-500 hover:bg-neutral-50">
                      <span className="sr-only">Next</span>
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      } />
    </Routes>
  );
};

export default FeesPage;