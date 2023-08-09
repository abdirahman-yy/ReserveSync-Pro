import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://htecmmpivhbfpvzmpbbn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0ZWNtbXBpdmhiZnB2em1wYmJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE1NjA3ODgsImV4cCI6MjAwNzEzNjc4OH0.CZYL01YdwwRMXeiEiwBcAuvCOO-o2UO-JJvlnnmdzJQ';

const supabase = createClient(supabaseUrl, supabaseKey);

// Corporation Table
const corporationTable = 'corporation';
const corporationFields = {
  id: 'uuid',
  name: 'text',
  industry: 'text',
  headquarters_location: 'text',
  founding_date: 'date',
  revenue: 'numeric',
  employee_count: 'integer',
  website: 'text',
  social_media: 'jsonb',
  contact_email: 'text',
  ceo_name: 'text',
};

// Employee Table
const employeeTable = 'employee';
const employeeFields = {
  id: 'uuid',
  corporation_id: 'uuid references corporation(id)',
  name: 'text',
  job_title: 'text',
  department: 'text',
  contact_info: 'jsonb',
};

// Resource Table
const resourceTable = 'resource';
const resourceFields = {
  id: 'uuid',
  corporation_id: 'uuid references corporation(id)',
  type: 'text',
  name: 'text',
  is_approval_required: 'boolean',
  is_customizable: 'boolean',
  availability_status: 'text',
};

// Reservation Table
const reservationTable = 'reservation';
const reservationFields = {
  id: 'uuid',
  employee_id: 'uuid references employee(id)',
  resource_id: 'uuid references resource(id)',
  start_time: 'timestamp',
  end_time: 'timestamp',
  is_approved: 'boolean',
  notes: 'text',
};

// ResourceCategory Table
const resourceCategoryTable = 'resource_category';
const resourceCategoryFields = {
  id: 'uuid',
  name: 'text',
};

// Create the Tables
await supabase
  .from(corporationTable)
  .upsert([corporationFields]);

await supabase
  .from(employeeTable)
  .upsert([employeeFields]);

await supabase
  .from(resourceTable)
  .upsert([resourceFields]);

await supabase
  .from(reservationTable)
  .upsert([reservationFields]);

await supabase
  .from(resourceCategoryTable)
  .upsert([resourceCategoryFields]);
