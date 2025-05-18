<template>
  <div class="security-module">
    <h1>Безопасность</h1>
    
    <div class="security-tabs">
      <q-tabs
        v-model="activeTab"
        class="text-primary"
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-tab name="access" label="Управление доступом" />
        <q-tab name="logs" label="Журнал событий" />
        <q-tab name="settings" label="Настройки безопасности" />
      </q-tabs>

      <q-tab-panels v-model="activeTab" animated>
        <!-- Панель управления доступом -->
        <q-tab-panel name="access">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-card>
                <q-card-section>
                  <div class="text-h6">Роли и права доступа</div>
                  <div class="row q-col-gutter-md">
                    <div class="col-12 col-md-4">
                      <q-select
                        v-model="selectedRole"
                        :options="roles"
                        label="Роль"
                      />
                    </div>
                    <div class="col-12 col-md-4">
                      <q-select
                        v-model="selectedUser"
                        :options="users"
                        label="Пользователь"
                      />
                    </div>
                    <div class="col-12 col-md-4">
                      <q-btn color="primary" label="Назначить роль" @click="assignRole" />
                    </div>
                  </div>
                  <q-table
                    :rows="roleAssignments"
                    :columns="roleColumns"
                    row-key="id"
                    :loading="loading"
                  />
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-tab-panel>

        <!-- Панель журнала событий -->
        <q-tab-panel name="logs">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-card>
                <q-card-section>
                  <div class="text-h6">Журнал событий безопасности</div>
                  <div class="row q-col-gutter-md">
                    <div class="col-12 col-md-4">
                      <q-select
                        v-model="selectedLogType"
                        :options="logTypes"
                        label="Тип события"
                      />
                    </div>
                    <div class="col-12 col-md-4">
                      <q-input
                        v-model="dateRange"
                        type="daterange"
                        label="Период"
                      />
                    </div>
                  </div>
                  <q-table
                    :rows="securityLogs"
                    :columns="logColumns"
                    row-key="id"
                    :loading="loading"
                  />
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-tab-panel>

        <!-- Панель настроек безопасности -->
        <q-tab-panel name="settings">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-card>
                <q-card-section>
                  <div class="text-h6">Настройки безопасности</div>
                  <div class="row q-col-gutter-md">
                    <div class="col-12 col-md-6">
                      <q-toggle
                        v-model="settings.twoFactorEnabled"
                        label="Двухфакторная аутентификация"
                      />
                    </div>
                    <div class="col-12 col-md-6">
                      <q-toggle
                        v-model="settings.passwordPolicy"
                        label="Строгая политика паролей"
                      />
                    </div>
                    <div class="col-12 col-md-6">
                      <q-toggle
                        v-model="settings.sessionTimeout"
                        label="Автоматический выход"
                      />
                    </div>
                    <div class="col-12 col-md-6">
                      <q-toggle
                        v-model="settings.ipRestriction"
                        label="Ограничение по IP"
                      />
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'SecurityModule',
  setup() {
    const activeTab = ref('access')
    const loading = ref(false)
    const selectedRole = ref(null)
    const selectedUser = ref(null)
    const selectedLogType = ref(null)
    const dateRange = ref(null)

    const settings = ref({
      twoFactorEnabled: false,
      passwordPolicy: true,
      sessionTimeout: true,
      ipRestriction: false
    })

    const roleColumns = [
      { name: 'id', label: 'ID', field: 'id', sortable: true },
      { name: 'user', label: 'Пользователь', field: 'user', sortable: true },
      { name: 'role', label: 'Роль', field: 'role', sortable: true },
      { name: 'assignedAt', label: 'Назначена', field: 'assignedAt', sortable: true },
      { name: 'assignedBy', label: 'Назначил', field: 'assignedBy', sortable: true }
    ]

    const logColumns = [
      { name: 'id', label: 'ID', field: 'id', sortable: true },
      { name: 'timestamp', label: 'Время', field: 'timestamp', sortable: true },
      { name: 'type', label: 'Тип', field: 'type', sortable: true },
      { name: 'user', label: 'Пользователь', field: 'user', sortable: true },
      { name: 'action', label: 'Действие', field: 'action', sortable: true },
      { name: 'ip', label: 'IP адрес', field: 'ip', sortable: true }
    ]

    const roles = [
      { label: 'Администратор', value: 'admin' },
      { label: 'Менеджер', value: 'manager' },
      { label: 'Оператор', value: 'operator' },
      { label: 'Просмотр', value: 'viewer' }
    ]

    const logTypes = [
      { label: 'Все события', value: 'all' },
      { label: 'Вход в систему', value: 'login' },
      { label: 'Изменение прав', value: 'permissions' },
      { label: 'Настройки безопасности', value: 'settings' }
    ]

    const users = ref([])
    const roleAssignments = ref([])
    const securityLogs = ref([])

    const assignRole = () => {
      // Логика назначения роли
    }

    onMounted(() => {
      // Загрузка начальных данных
    })

    return {
      activeTab,
      loading,
      selectedRole,
      selectedUser,
      selectedLogType,
      dateRange,
      settings,
      roleColumns,
      logColumns,
      roles,
      logTypes,
      users,
      roleAssignments,
      securityLogs,
      assignRole
    }
  }
}
</script>

<style scoped>
.security-module {
  padding: 20px;
}

.security-tabs {
  margin-top: 20px;
}
</style> 