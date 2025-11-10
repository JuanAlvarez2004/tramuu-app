/**
 * Test Configuration
 * Configuración centralizada para todos los tests de integración
 * 
 * IMPORTANTE: Estas son credenciales REALES del backend de pruebas
 */

export const TEST_CREDENTIALS = {
  // Usuario Empresa
  COMPANY: {
    email: 'test@gmail.com',
    password: '123456',
    userId: '2569f03b-3e14-44f2-9a16-381fd92d7188',
    companyId: 'a2ffe1a6-6f63-48b7-8502-1ec7b0c65b04',
    companyName: 'test',
    invitationCode: '1E834B35',
  },

  // Usuario Empleado
  EMPLOYEE: {
    email: 'testemployee@gmail.com',
    password: '123456',
    userId: '2063a6cb-2f9b-4181-b3eb-e0e0819b6367',
    employeeId: '4d25d4ac-28a5-4ef0-a9d8-cba65bc1de89',
    companyId: 'a2ffe1a6-6f63-48b7-8502-1ec7b0c65b04',
    employeeName: 'test',
  },
};

// Datos de ejemplo para tests de creación
export const TEST_DATA_TEMPLATES = {
  COW: {
    name: (suffix = Date.now()) => `Test Cow ${suffix}`,
    code: (suffix = Date.now()) => `COW${suffix}`,
    breed: 'Holstein',
    birthDate: '2023-01-01',
    weight: 450,
    status: 'active',
  },

  MILKING: {
    liters: 15.5,
    session: 'AM', // 'AM' o 'PM'
    date: new Date().toISOString().split('T')[0], // YYYY-MM-DD
    observations: 'Test milking record',
  },

  QUALITY_TEST: {
    fat: 3.5,
    protein: 3.2,
    lactose: 4.8,
    solids: 12.5,
    temperature: 4.0,
    ph: 6.7,
    testDate: new Date().toISOString().split('T')[0],
  },

  INVENTORY_ITEM: {
    name: (suffix = Date.now()) => `Test Product ${suffix}`,
    code: (suffix = Date.now()) => `PROD${suffix}`,
    category: 'supplies',
    quantity: 100,
    unit: 'units',
    minStock: 10,
    price: 50.00,
  },

  DELIVERY: {
    liters: 200,
    destination: 'Test Dairy Plant',
    deliveryDate: new Date().toISOString().split('T')[0],
    status: 'pending',
    observations: 'Test delivery',
  },
};

// Timeouts para diferentes tipos de operaciones
export const TEST_TIMEOUTS = {
  SHORT: 30000,    // 30 segundos - operaciones rápidas
  MEDIUM: 60000,   // 1 minuto - operaciones normales
  LONG: 120000,    // 2 minutos - operaciones lentas o batch
};

// Pausas entre tests para evitar rate limiting
export const TEST_DELAYS = {
  BETWEEN_TESTS: 1000,      // 1 segundo entre tests
  AFTER_CREATE: 500,         // 500ms después de crear
  AFTER_DELETE: 500,         // 500ms después de eliminar
  BEFORE_BATCH: 2000,        // 2 segundos antes de operaciones batch
};

export default TEST_CREDENTIALS;
